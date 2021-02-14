import numeric from 'validator/lib/isNumeric'

const isNumeric = (str: string) => {
  return numeric(str)
}

export default isNumeric
