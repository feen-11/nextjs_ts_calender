import React from 'react';

export default function AddSchedule({
  date,
  onClose,
  onChangeScheduleText,
  onClickAddSchedule,
}: {
  date: Date;
  onClose: () => void;
  onChangeScheduleText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickAddSchedule: () => void;
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">
          予定を作成する - {date.toLocaleDateString()}
        </h2>
        <input
          type="text"
          className="border p-2 mb-4 w-full"
          placeholder="予定タイトルを入力"
          onChange={onChangeScheduleText}
        />
        <div className="flex justify-center">
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={onClickAddSchedule}
          >
            追加
          </button>
        </div>
      </div>
    </div>
  );
}
