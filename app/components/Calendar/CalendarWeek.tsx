import clsx from 'clsx';
import { getDate, getDay, isSameDay, isSameMonth } from 'date-fns';
import React from 'react';
import CalendarDate from './CalendarDate';

export default function CalendarWeek({
  week,
  baseDate,
  weekIndex,
}: {
  week: Date[];
  baseDate: Date;
  weekIndex: number;
}) {
  return (
    <tr key={weekIndex} className="h-1/6">
      {week.map((date: Date) => (
        <CalendarDate key={getDay(date)} date={date} baseDate={baseDate} />
      ))}
    </tr>
  );
}
