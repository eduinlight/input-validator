import ip from 'validator/lib/isIP'

const isIP = (str: string) => {
  return ip(str)
}

export default isIP
