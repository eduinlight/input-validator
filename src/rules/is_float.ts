import float from 'validator/lib/isFloat'

export const isFloat = (str: string) => {
  return float(str)
}
