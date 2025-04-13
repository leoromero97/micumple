import React from "react";
import Calendar from "./Calendar";
import { getDaysRemaining } from "@/helpers/utils/date";

const getMessageCount = (days?: number): string => {
  let message = `Faltan ${days} días`;
  if (days === 1) {
    message = `Falta ${days} día`;
  }
  if (days === 0) {
    message = `¡Es hoy!`;
  }

  return message;
};

export default function Header() {
  const celebrationDate = new Date(2025, 3, 19);
  const remainingDays = getDaysRemaining(celebrationDate);
  const messageCount = getMessageCount(remainingDays);

  return (
    <div className="flex flex-col justify-between gap-4 w-full">
      <span
        className={`
        p-3 
        md:p-6
        rounded-sm 
        bg-blue-100 
        text-blue-800 
        text-center 
        font-semibold 
        border-2 
        border-blue-800
        text-lg
        `}
      >
        {messageCount}
      </span>
      <Calendar celebrationDate={celebrationDate} />
    </div>
  );
}
