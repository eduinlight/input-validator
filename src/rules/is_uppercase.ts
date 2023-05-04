import uppercase from 'validator/lib/isUppercase'

export const isUppercase = (str: string) => {
  return uppercase(str)
}
