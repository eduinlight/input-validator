import afterDate from 'validator/lib/isAfter'

const isAfterDate = (str: string, date: string) => {
  return afterDate(str, date)
}

export default isAfterDate
