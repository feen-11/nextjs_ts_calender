import {
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfWeek,
  lastDayOfMonth,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

export const generateMonth = (date: Date) => {
  const timeZone = 'Asia/Tokyo';

  const firstDay = startOfMonth(date);
  const lastDay = lastDayOfMonth(date);

  const sundays = eachWeekOfInterval({
    start: firstDay,
    end: lastDay,
  });

  const calendar = sundays.map((sunday) => {
    const start = toZonedTime(sunday, timeZone);
    const end = toZonedTime(endOfWeek(sunday), timeZone);
    return eachDayOfInterval({ start, end }).map((day) =>
      toZonedTime(day, timeZone)
    );
  });

  return calendar;
};

export const generateWeek = (date: Date) => {
  const timeZone = 'Asia/Tokyo';
  const start = toZonedTime(startOfWeek(date), timeZone);
  const end = toZonedTime(endOfWeek(date), timeZone);
  return eachDayOfInterval({ start, end }).map((day) =>
    toZonedTime(day, timeZone)
  );
};
