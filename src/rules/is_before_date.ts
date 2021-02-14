import beforeDate from 'validator/lib/isBefore'

const isBeforeDate = (str: string, date: string) => {
  return beforeDate(str, date)
}

export default isBeforeDate
