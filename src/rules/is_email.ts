import email from 'validator/lib/isEmail'

const isEmail = (str: string) => {
  return email(str)
}

export default isEmail
