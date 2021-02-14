import contains from './contains'
import equals from './equals'
import isAfterDate from './is_after_date'
import isAlpha from './is_alpha'
import isAlphaNumeric from './is_alpha_numeric'
import isAscii from './is_ascii'
import isBase64 from './is_base64'
import isBeforeDate from './is_before_date'
import isCreditCard from './is_credit_card'
import isCurrency from './is_currency'
import isDate from './is_date'
import isDivisibleBy from './is_divisible_by'
import isEmail from './is_email'
import isFloat from './is_float'
import isHexadecimal from './is_hexadecimal'
import isHexcolor from './is_hexcolor'
import isIn from './is_in'
import isInt from './is_int'
import isIP from './is_ip'
import isJson from './is_json'
import isLocale from './is_locale'
import isLowercase from './is_lowercase'
import isMaxLength from './is_max_length'
import isMinLength from './is_min_length'
import isMongooseId from './is_mongoose_id'
import isNumeric from './is_numeric'
import isRequired from './is_required'
import isUppercase from './is_uppercase'
import isUrl from './is_url'
import matches from './matches'
import isBoolean from './is_boolean'

const rules = {
  equals: equals,
  contains: contains,
  matches: matches,
  email: isEmail,
  url: isUrl,
  ip: isIP,
  alpha: isAlpha,
  numeric: isNumeric,
  alphaNumeric: isAlphaNumeric,
  base64: isBase64,
  hexadecimal: isHexadecimal,
  hexcolor: isHexcolor,
  lowercase: isLowercase,
  uppercase: isUppercase,
  int: isInt,
  float: isFloat,
  divisibleBy: isDivisibleBy,
  required: isRequired,
  minLength: isMinLength,
  maxLength: isMaxLength,
  date: isDate,
  afterDate: isAfterDate,
  beforeDate: isBeforeDate,
  in: isIn,
  creditCard: isCreditCard,
  json: isJson,
  ascii: isAscii,
  boolean: isBoolean,
  locale: isLocale,
  currency: isCurrency,
  mongooseId: isMongooseId
}

export default rules
