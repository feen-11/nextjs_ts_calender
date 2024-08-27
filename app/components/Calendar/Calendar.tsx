'use client';

import {
  addMonths,
  format,
  subMonths,
  addWeeks,
  subWeeks,
  startOfWeek,
} from 'date-fns';
import { generateMonth, generateWeek } from '@/app/hooks/useGenerateCalendar';
import { useEffect, useState } from 'react';
import CalendarWeek from './CalendarWeek';

export default function Calendar() {
  const [baseDate, setBaseDate] = useState(new Date());
  const [currentCalendar, setCurrentCalendar] = useState(
    generateMonth(baseDate)
  );
  const [viewMode, setViewMode] = useState('month');

  const togglePrev = () => {
    if (viewMode === 'month') {
      setBaseDate(subMonths(baseDate, 1));
    } else {
      setBaseDate(subWeeks(baseDate, 1));
    }
  };

  const toggleNext = () => {
    if (viewMode === 'month') {
      setBaseDate(addMonths(baseDate, 1));
    } else {
      setBaseDate(addWeeks(baseDate, 1));
    }
  };

  const toggleViewMode = () => {
    if (viewMode === 'month') {
      setViewMode('week');
      setBaseDate(startOfWeek(new Date()));
    } else {
      setViewMode('month');
    }
  };

  useEffect(() => {
    if (viewMode === 'month') {
      setCurrentCalendar(generateMonth(baseDate));
    } else {
      setCurrentCalendar([generateWeek(baseDate)]);
    }
  }, [baseDate, viewMode]);

  return (
    <div className="p-4 h-screen flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={togglePrev}
        >
          {viewMode === 'month' ? '先月' : '先週'}
        </button>
        <h1 className="text-xl font-bold">{format(baseDate, 'yyyy年 MM月')}</h1>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={toggleNext}
        >
          {viewMode === 'month' ? '来月' : '来週'}
        </button>
        <button
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
          onClick={toggleViewMode}
        >
          {viewMode === 'month' ? '週表示' : '月表示'}
        </button>
      </div>
      <div className="flex-grow overflow-auto">
        <table className="w-full border-collapse h-full">
          <thead>
            <tr>
              {['日', '月', '火', '水', '木', '金', '土'].map((day) => (
                <th key={day} className="border p-2 bg-gray-200">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {viewMode === 'month' ? (
              currentCalendar.map((week, weekIndex) => (
                <CalendarWeek
                  week={week}
                  weekIndex={weekIndex}
                  baseDate={baseDate}
                  key={weekIndex}
                />
              ))
            ) : (
              <CalendarWeek
                week={currentCalendar[0]}
                weekIndex={0}
                baseDate={baseDate}
                key={0}
              />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
