import bool from 'validator/lib/isBoolean'

export const isBoolean = (str: string) => {
  return bool(str)
}
