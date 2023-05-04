import locale from 'validator/lib/isLocale'

export const isLocale = (str: string) => {
  return locale(str)
}
