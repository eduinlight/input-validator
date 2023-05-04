import url from 'validator/lib/isURL'

export const isUrl = (str: string) => {
  return url(str)
}
