import { LocaleType } from '../types'

export default {
  equals: 'the text is diferent from %p1',
  contains: 'the text do not contain %p1',
  matches: 'the text do not match $p1',
  email: 'email format incorrect',
  url: 'url format incorrect',
  ip: 'ip format incorrect',
  alpha: 'only english characters',
  numeric: 'only a numeric value',
  alphaNumeric: 'only numeric or english characters',
  base64: 'base64 format is inconcorrect',
  hexadecimal: 'exahecimal value is incorrect',
  hexcolor: 'exahecimal color is incorrect',
  lowercase: 'only lowercase characters',
  uppercase: 'only uppercase characters',
  int: 'only integer number',
  float: 'only float number',
  divisibleBy: "the number it's not divisible by %p1",
  required: 'required',
  minLength: 'min length %p1',
  maxLength: 'max length %p1',
  date: 'wrong date',
  afterDate: 'date is not after %p1',
  beforeDate: 'date is not before %p1',
  in: 'only one of %p1',
  creditCard: 'credit card value incorrect',
  json: 'json format is incorrect',
  ascii: 'only ascii characters',
  boolean: 'wrong boolean value',
  locale: 'wrong languaje value',
  currency: 'wrong currency value',
  mongooseId: 'the id is invalid',
  maxValue: 'value must be less or equal to %p1',
  minValue: 'value must be more or equal to %p1'
} as LocaleType
