import React from 'react';
import { getTime } from 'date-fns';
import CalendarDate from './CalendarDate';
import { Schedule } from '@/app/types/shcedule';

interface CalendarWeekProps {
  week: Date[];
  baseDate: Date;
  weekIndex: number;
  onDateClick: (date: Date) => void;
  schedules: Schedule[];
}

export default React.memo(function CalendarWeek({
  week,
  baseDate,
  weekIndex,
  onDateClick,
  schedules,
}: CalendarWeekProps) {
  return (
    <tr key={weekIndex} className="h-1/6">
      {week.map((date: Date) => (
        <CalendarDate
          key={getTime(date)}
          date={date}
          baseDate={baseDate}
          onClick={onDateClick}
          schedules={schedules}
        />
      ))}
    </tr>
  );
});
