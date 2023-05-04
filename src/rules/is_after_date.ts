import afterDate from 'validator/lib/isAfter'

export const isAfterDate = (str: string, date: string) => {
  return afterDate(str, date)
}
