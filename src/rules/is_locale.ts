import locale from 'validator/lib/isLocale'

const isLocale = (str: string) => {
  return locale(str)
}

export default isLocale
