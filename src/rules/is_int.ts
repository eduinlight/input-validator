import int from 'validator/lib/isInt'

const isInt = (str: string) => {
  return int(str)
}

export default isInt
