import alphaNumeric from 'validator/lib/isAlphanumeric'

const isAlphaNumeric = (str: string) => {
  return alphaNumeric(str)
}

export default isAlphaNumeric
