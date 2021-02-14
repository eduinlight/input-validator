import float from 'validator/lib/isFloat'

const isFloat = (str: string) => {
  return float(str)
}

export default isFloat
