import email from 'validator/lib/isEmail'

export const isEmail = (str: string) => {
  return email(str)
}
