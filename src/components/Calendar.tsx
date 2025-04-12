import React from "react";
import { getDayInfo } from "@/helpers/utils/date";

export type CalendarPropTypes = {
  celebrationDate: Date; // 2025 3 19 año/mes/dia
};

export default function Calendar({
  celebrationDate,
}: Readonly<CalendarPropTypes>) {
  const { dayNumber, dayString } = getDayInfo(celebrationDate);

  return (
    <div className="flex justify-between gap-8 w-full">
      <div className="flex flex-col gap-2 rounded-md items-center min-w-20 border-1 border-neutral-100">
        <span className="bg-neutral-100 text-neutral-800 w-full text-center rounded-t-sm">
          {dayNumber.toString()}
        </span>
        <span className="capitalize text-neutral-100 py-5 items-center justify-center min-h-18">
          {dayString}
        </span>
      </div>
      <p>Presencial, a partir de las 20:30 horas</p>
    </div>
  );
}
