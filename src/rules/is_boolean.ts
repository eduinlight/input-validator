import bool from 'validator/lib/isBoolean'

const isBoolean = (str: string) => {
  return bool(str)
}

export default isBoolean
