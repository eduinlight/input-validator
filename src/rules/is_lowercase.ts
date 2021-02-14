import lowercase from 'validator/lib/isLowercase'

const isLowercase = (str: string) => {
  return lowercase(str)
}

export default isLowercase
