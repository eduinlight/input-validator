import ascii from 'validator/lib/isAscii'

const isAscii = (str: string) => {
  return ascii(str)
}

export default isAscii
