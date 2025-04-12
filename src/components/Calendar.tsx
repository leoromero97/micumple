import { getDayInfo, getDaysRemaining } from "@/helpers/utils/date";
import React from "react";

export type CalendarPropTypes = {
  celebrationDate: Date; // 2025 3 19 año/mes/dia
};

export default function Calendar({
  celebrationDate,
}: Readonly<CalendarPropTypes>) {
  const { dayNumber, dayString } = getDayInfo(celebrationDate);
  return (
    <div>
      <div className="flex flex-col gap-2 rounded-md">
        <span className="capitalize">{dayString}</span>
        <span>{dayNumber.toString()}</span>
      </div>
      <p>Presencial, Sábado 19/04/2025 a las 20:30 horas</p>
    </div>
  );
}
