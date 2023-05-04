import base64 from 'validator/lib/isBase64'

export const isBase64 = (str: string) => {
  return base64(str)
}
