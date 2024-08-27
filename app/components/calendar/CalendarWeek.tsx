import React from 'react';
import { getDay } from 'date-fns';
import CalendarDate from './CalendarDate';
import { Schedule } from '@/app/types/shcedule';

export default function CalendarWeek({
  week,
  baseDate,
  weekIndex,
  onDateClick,
  schedules,
}: {
  week: Date[];
  baseDate: Date;
  weekIndex: number;
  onDateClick: (date: Date) => void;
  schedules: Schedule[];
}) {
  return (
    <tr key={weekIndex} className="h-1/6">
      {week.map((date: Date) => (
        <CalendarDate
          key={getDay(date)}
          date={date}
          baseDate={baseDate}
          onClick={onDateClick}
          schedules={schedules}
        />
      ))}
    </tr>
  );
}
