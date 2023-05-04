import hexadecimal from 'validator/lib/isHexadecimal'

export const isHexadecimal = (str: string) => {
  return hexadecimal(str)
}
