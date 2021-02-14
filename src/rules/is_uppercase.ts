import uppercase from 'validator/lib/isUppercase'

const isUppercase = (str: string) => {
  return uppercase(str)
}

export default isUppercase
