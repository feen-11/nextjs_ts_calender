'use client';
import { addMonths, format, subMonths } from 'date-fns';
import { generateCalendar } from '@/app/hooks/useGenerateCalendar';
import { useEffect, useState } from 'react';
import Week from './CalendarWeek';

export default function Calendar() {
  const [baseDate, setBaseDate] = useState(new Date());
  const [currentCalendar, setCurrentCalendar] = useState(
    generateCalendar(baseDate)
  );

  const [isShowWeek, setIsShowWeek] = useState(false);

  const togglePrevMonth = () => {
    setBaseDate(subMonths(baseDate, 1));
  };
  const toggleNextMonth = () => {
    setBaseDate(addMonths(baseDate, 1));
  };

  useEffect(() => {
    setCurrentCalendar(generateCalendar(baseDate));
  }, [baseDate]);

  return (
    <div className="p-4 h-screen flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={togglePrevMonth}
        >
          先月
        </button>
        <h1 className="text-xl font-bold">{format(baseDate, 'yyyy年 MM月')}</h1>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={toggleNextMonth}
        >
          来月
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
            {currentCalendar.map((week, weekIndex) => (
              <Week
                week={week}
                weekIndex={weekIndex}
                baseDate={baseDate}
                key={weekIndex}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
