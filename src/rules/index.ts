import validator from 'validator'
import equals from './equals'
import isAlpha from './is_alpha'
import isAlphaNumeric from './is_alpha_numeric'
import isDivisibleBy from './is_divisible_by'
import isEmail from './is_email'
import isFloat from './is_float'
import isInt from './is_int'
import isIP from './is_ip'
import isNumeric from './is_numeric'
import isUrl from './is_url'
import matches from './matches'

const rules = {
  equals: equals,
  matches: matches,
  email: isEmail,
  url: isUrl,
  ip: isIP,
  alpha: isAlpha,
  numeric: isNumeric,
  alphaNumeric: isAlphaNumeric,
  base64: validator.isBase64,
  hexadecimal: validator.isHexadecimal,
  hexcolor: validator.isHexColor,
  lowercase: validator.isLowercase,
  uppercase: validator.isUppercase,
  int: isInt,
  float: isFloat,
  divisibleBy: isDivisibleBy,
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
