import hexadecimal from 'validator/lib/isHexadecimal'

const isHexadecimal = (str: string) => {
  return hexadecimal(str)
}

export default isHexadecimal
