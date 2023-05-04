import alpha from 'validator/lib/isAlpha'

export const IsAlpha = (str: string) => {
  return alpha(str)
}
