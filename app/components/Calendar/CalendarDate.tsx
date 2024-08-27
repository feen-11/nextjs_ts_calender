import React from 'react';
import clsx from 'clsx';
import { getDate, getDay, isSameDay, isSameMonth } from 'date-fns';
import { Schedule } from '@/app/types/shcedule';

export default function CalendarDate({
  date,
  baseDate,
  onClick,
  schedules,
}: {
  date: Date;
  baseDate: Date;
  onClick: (date: Date) => void;
  schedules: Schedule[];
}) {
  const schedulesForTheDay = schedules.filter((schedule) =>
    isSameDay(date, schedule.date)
  );
  return (
    <td
      key={getDay(date)}
      className={clsx('border p-2 text-center align-top cursor-pointer', {
        'bg-blue-200': isSameDay(date, new Date()),
        'text-gray-400': !isSameMonth(date, baseDate),
      })}
      onClick={() => onClick(date)}
    >
      {getDate(date)}
      {schedulesForTheDay.map((scheduleForTheDay) => (
        <p
          key={scheduleForTheDay.title}
          className="font-bold mt-1 bg-blue-500 text-white p-1 rounded"
        >
          {scheduleForTheDay.title}
        </p>
      ))}
    </td>
  );
}
