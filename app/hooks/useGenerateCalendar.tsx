import {
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfWeek,
  lastDayOfMonth,
  startOfMonth,
} from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

export const generateCalendar = (date: Date) => {
  const timeZone = 'Asia/Tokyo';

  const firstDay = startOfMonth(date);
  const lastDay = lastDayOfMonth(date);

  const sundays = eachWeekOfInterval({
    start: firstDay,
    end: lastDay,
  });

  const weeks = sundays.map((sunday) => {
    const start = toZonedTime(sunday, timeZone);
    const end = toZonedTime(endOfWeek(sunday), timeZone);
    return eachDayOfInterval({ start, end }).map((day) =>
      toZonedTime(day, timeZone)
    );
  });

  return weeks;
};
