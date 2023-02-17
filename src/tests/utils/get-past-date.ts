import { parseISO, setYear } from "date-fns";

export function getPastDate(date: string, year: number = 1): Date {
  const parseDate = parseISO(date)
  return setYear(parseDate, parseDate.getFullYear() - year)
}