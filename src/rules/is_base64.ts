import base64 from 'validator/lib/isBase64'

const isBase64 = (str: string) => {
  return base64(str)
}

export default isBase64
