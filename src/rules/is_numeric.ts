import numeric from 'validator/lib/isNumeric'

export const isNumeric = (str: string) => {
  return numeric(str)
}
