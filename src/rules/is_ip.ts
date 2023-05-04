import ip from 'validator/lib/isIP'

export const isIP = (str: string) => {
  return ip(str)
}
