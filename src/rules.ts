import validator from 'validator'

const rules = {
  equals: validator.equals,
  contains: validator.contains,
  matches: validator.matches,
  email: validator.isEmail,
  url: validator.isURL,
  ip: validator.isIP,
  alpha: validator.isAlpha,
  numeric: validator.isNumeric,
  alphaNumeric: validator.isAlphanumeric,
  base64: validator.isBase64,
  hexadecimal: validator.isHexadecimal,
  hexcolor: validator.isHexColor,
  lowercase: validator.isLowercase,
  uppercase: validator.isUppercase,
  int: validator.isInt,
  float: validator.isFloat,
  divisibleBy: validator.isDivisibleBy,
  required: (value: string): boolean =>
    value !== undefined && value !== null && value !== '',
  minLength: (value: string, length: number) => validator.isLength(
    value,
    { min: length }
  ),
  maxLength: (value: string, length: number): boolean =>
    validator.isLength(value, { max: length }),
  date: validator.isISO8601,
  afterDate: validator.isAfter,
  beforeDate: validator.isBefore,
  in: validator.isIn,
  creditCard: validator.isCreditCard,
  json: validator.isJSON,
  ascii: validator.isAscii,
  boolean: validator.isBoolean,
  locale: validator.isLocale,
  currency: validator.isCurrency
}

export default rules
