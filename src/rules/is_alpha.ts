import alpha from 'validator/lib/isAlpha'

const isAlpha = (str: string) => {
  return alpha(str)
}

export default isAlpha
