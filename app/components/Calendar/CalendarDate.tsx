import clsx from 'clsx';
import { getDate, getDay, isSameDay, isSameMonth } from 'date-fns';
import React from 'react';

export default function CalendarDate({
  date,
  baseDate,
}: {
  date: Date;
  baseDate: Date;
}) {
  return (
    <td
      key={getDay(date)}
      className={clsx('border p-2 text-center align-top', {
        'bg-blue-200': isSameDay(date, new Date()),
        'text-gray-400': !isSameMonth(date, baseDate),
      })}
    >
      {getDate(date)}
    </td>
  );
}
