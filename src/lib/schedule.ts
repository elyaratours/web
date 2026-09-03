import type { Locale } from './i18n';
import { contactEmail } from './i18n';
import { getTourPath, type TourEntry } from './tours';

type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

interface RecurringScheduleRule {
  locale: Locale;
  translationKey: string;
  weekdays: Weekday[];
  time: string;
  language: string;
}

export interface ScheduledDeparture {
  id: string;
  locale: Locale;
  translationKey: string;
  date: string;
  dayNumber: number;
  time: string;
  language: string;
  tour: TourEntry;
  tourPath: string;
  reservationUrl: string;
  weekdayLabel: string;
  dateLabel: string;
  monthKey: string;
}

export interface CalendarDay {
  date: string;
  dayNumber: number;
  inCurrentMonth: boolean;
  inWindow: boolean;
  departures: ScheduledDeparture[];
}

export interface CalendarMonth {
  key: string;
  label: string;
  days: CalendarDay[];
}

export const recurringScheduleRules: RecurringScheduleRule[] = [
  {
    locale: 'es',
    translationKey: 'albaicin',
    weekdays: [2, 4, 6],
    time: '10:00',
    language: 'Español',
  },
  {
    locale: 'en',
    translationKey: 'albaicin',
    weekdays: [3, 5, 0],
    time: '10:00',
    language: 'English',
  },
];

export const calendarWeekdayLabels = {
  es: ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'],
  en: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
} satisfies Record<Locale, string[]>;

const localeTags = {
  es: 'es-ES',
  en: 'en-GB',
} satisfies Record<Locale, string>;

const emailCopy = {
  es: {
    subjectPrefix: 'Reserva',
    greeting: 'Hola, quiero reservar esta ruta.',
    tour: 'Ruta',
    date: 'Fecha',
    time: 'Hora',
    language: 'Idioma',
    name: 'Nombre',
    people: 'Numero de personas',
    phone: 'Telefono',
    comments: 'Comentarios',
  },
  en: {
    subjectPrefix: 'Booking',
    greeting: 'Hello, I would like to book this tour.',
    tour: 'Tour',
    date: 'Date',
    time: 'Time',
    language: 'Language',
    name: 'Name',
    people: 'Number of people',
    phone: 'Phone',
    comments: 'Comments',
  },
} satisfies Record<Locale, Record<string, string>>;

export function getToday() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

export function getScheduleWindow(baseDate = getToday()) {
  const start = new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate());
  const end = new Date(start);
  end.setMonth(end.getMonth() + 2);

  return { start, end };
}

export function getScheduledDepartures(tours: TourEntry[], locale: Locale, tourFilter?: TourEntry) {
  const { start, end } = getScheduleWindow();
  const localizedTours = tours.filter((tour) => tour.data.locale === locale);
  const matchingRules = recurringScheduleRules.filter((rule) => rule.locale === locale);
  const departures: ScheduledDeparture[] = [];

  for (const rule of matchingRules) {
    const tour = localizedTours.find((item) => item.data.translationKey === rule.translationKey);

    if (!tour || (tourFilter && tour.id !== tourFilter.id)) {
      continue;
    }

    for (const date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
      if (!rule.weekdays.includes(date.getDay() as Weekday)) {
        continue;
      }

      const isoDate = toIsoDate(date);

      departures.push({
        id: `${rule.locale}-${rule.translationKey}-${isoDate}`,
        locale,
        translationKey: rule.translationKey,
        date: isoDate,
        dayNumber: date.getDate(),
        time: rule.time,
        language: rule.language,
        tour,
        tourPath: getTourPath(tour),
        reservationUrl: getScheduledReservationUrl(tour, isoDate, rule.time, rule.language),
        weekdayLabel: formatWeekday(date, locale),
        dateLabel: formatDate(date, locale),
        monthKey: getMonthKey(date),
      });
    }
  }

  return departures.sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
}

export function getCalendarMonths(departures: ScheduledDeparture[], locale: Locale) {
  const { start, end } = getScheduleWindow();
  const departuresByDate = new Map<string, ScheduledDeparture[]>();

  for (const departure of departures) {
    const dateDepartures = departuresByDate.get(departure.date) ?? [];
    dateDepartures.push(departure);
    departuresByDate.set(departure.date, dateDepartures);
  }

  const months: CalendarMonth[] = [];

  for (let monthDate = firstDayOfMonth(start); monthDate <= end; monthDate.setMonth(monthDate.getMonth() + 1)) {
    const monthStart = firstDayOfMonth(monthDate);
    const monthEnd = lastDayOfMonth(monthDate);
    const gridStart = startOfCalendarWeek(monthStart);
    const gridEnd = endOfCalendarWeek(monthEnd);
    const days: CalendarDay[] = [];

    for (const date = new Date(gridStart); date <= gridEnd; date.setDate(date.getDate() + 1)) {
      const isoDate = toIsoDate(date);

      days.push({
        date: isoDate,
        dayNumber: date.getDate(),
        inCurrentMonth: date.getMonth() === monthDate.getMonth(),
        inWindow: date >= start && date <= end,
        departures: departuresByDate.get(isoDate) ?? [],
      });
    }

    months.push({
      key: getMonthKey(monthDate),
      label: formatMonth(monthDate, locale),
      days,
    });
  }

  return months;
}

function getScheduledReservationUrl(tour: TourEntry, isoDate: string, time: string, language: string) {
  const copy = emailCopy[tour.data.locale];
  const date = parseIsoDate(isoDate);
  const subject = `${copy.subjectPrefix} ${tour.data.title} - ${formatDate(date, tour.data.locale)} ${time}`;
  const body = [
    copy.greeting,
    '',
    `${copy.tour}: ${tour.data.title}`,
    `${copy.date}: ${formatDate(date, tour.data.locale)}`,
    `${copy.time}: ${time}`,
    `${copy.language}: ${language}`,
    '',
    `${copy.name}:`,
    `${copy.people}:`,
    `${copy.phone}:`,
    `${copy.comments}:`,
  ].join('\n');

  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function formatDate(date: Date, locale: Locale) {
  return new Intl.DateTimeFormat(localeTags[locale], {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

function formatWeekday(date: Date, locale: Locale) {
  return new Intl.DateTimeFormat(localeTags[locale], { weekday: 'long' }).format(date);
}

function formatMonth(date: Date, locale: Locale) {
  return new Intl.DateTimeFormat(localeTags[locale], { month: 'long', year: 'numeric' }).format(date);
}

function firstDayOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function lastDayOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function startOfCalendarWeek(date: Date) {
  const result = new Date(date);
  const day = result.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  result.setDate(result.getDate() + diff);
  return result;
}

function endOfCalendarWeek(date: Date) {
  const result = new Date(date);
  const day = result.getDay();
  const diff = day === 0 ? 0 : 7 - day;
  result.setDate(result.getDate() + diff);
  return result;
}

function getMonthKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

function toIsoDate(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function parseIsoDate(isoDate: string) {
  const [year, month, day] = isoDate.split('-').map(Number);
  return new Date(year, month - 1, day);
}
