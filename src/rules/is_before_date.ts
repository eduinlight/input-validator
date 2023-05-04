import beforeDate from 'validator/lib/isBefore'

export const isBeforeDate = (str: string, date: string) => {
  return beforeDate(str, date)
}
