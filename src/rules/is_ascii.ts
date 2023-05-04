import ascii from 'validator/lib/isAscii'

export const isAscii = (str: string) => {
  return ascii(str)
}
