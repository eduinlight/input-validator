import int from 'validator/lib/isInt'

export const isInt = (str: string) => {
  return int(str)
}
