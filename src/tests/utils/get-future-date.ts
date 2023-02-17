import { setYear, parseISO } from 'date-fns'

/**
 * Receives "2022-08-10" and returns "2023-08-10"
 */

export function getFutureDate(date: string, year: number = 1): Date {
  const dateParsed = parseISO(date)
  return setYear(dateParsed, dateParsed.getFullYear() + year)
} 