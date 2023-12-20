export const weeksBetweenDates = (
  startDate: string,
  endDate: string,
): number => {
  const start: Date = new Date(startDate);
  const end: Date = new Date(endDate);
  const timeDifference = end.getTime() - start.getTime();

  const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
  const weeks = Math.ceil(timeDifference / oneWeekInMilliseconds);

  return weeks;
};
