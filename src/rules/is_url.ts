import url from 'validator/lib/isURL'

const isUrl = (str: string) => {
  return url(str)
}

export default isUrl
