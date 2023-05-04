import alphaNumeric from 'validator/lib/isAlphanumeric'

export const isAlphaNumeric = (str: string) => {
  return alphaNumeric(str)
}
