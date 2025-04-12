export function getDayInfo(date: Date): {
  dayString: string;
  dayNumber: number;
} {
  const options: Intl.DateTimeFormatOptions = { weekday: "long" };
  const dayString = date.toLocaleDateString("es-AR", options);
  const dayNumber = date.getDate();

  return { dayString, dayNumber };
}

export function getDaysRemaining(targetDate: Date): number {
  const currentDate = new Date();
  const timeDifference = targetDate.getTime() - currentDate.getTime();
  const daysRemaining = Math.ceil(timeDifference / (1000 * 3600 * 24));
  return daysRemaining;
}
