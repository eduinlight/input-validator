import lowercase from 'validator/lib/isLowercase'

export const isLowercase = (str: string) => {
  return lowercase(str)
}
