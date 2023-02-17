import { parseISO } from "date-fns";

export function getParseDate(date: string): Date {
  return parseISO(date);
}