import { LocaleType } from '../types'

export const esES = {
  equals: 'el texto no es igual a %p1',
  contains: 'el texto tiene que contener %p1',
  matches: 'el texto no coincide con el patrón $p1',
  email: 'el formato del correo no es correcto',
  url: 'el formato de la url no es correcta',
  ip: 'la ip no es correcta',
  alpha: 'el texto solo puede contener letras del alfabeto inglés',
  numeric: 'el dato solo puede contener números',
  alphaNumeric: 'el dato solo puede contener letras y/o números',
  base64: 'el texto solo puede ser una encriptación base64',
  hexadecimal: 'el dato solo puede ser un valor exadecimal',
  hexcolor: 'el dato solo puede ser un color en exadecimal',
  lowercase: 'el texto solo puede ser caractéres en minúscula',
  uppercase: 'el texto solo puede ser caractéres en mayúscula',
  int: 'el dato solo puede ser un entero',
  float: 'el dato solo puede ser un número decimal',
  divisibleBy: 'el dato tiene que ser divisible por %p1',
  required: 'el texto es requerido',
  minLength: 'el texto debe ser mayor que %p1 caracteres',
  maxLength: 'el texto no puede exceder los %p1 caracteres',
  date: 'fecha incorrecta',
  afterDate: 'la fecha debe ser después de %p1',
  beforeDate: 'la fecha debe de ser antes de %p1',
  in: 'la cadena no es correcta',
  creditCard: 'tarjeta de crédito incorrecta',
  json: 'el texto no esta en formato json',
  ascii: 'todos los caracteres del texto deben ser código ascii',
  boolean: 'valor booleano incorrecto',
  locale: 'el lenguaje no se reconoce',
  currency: 'la moneda no se reconoce',
  mongooseId: 'el id es incorrecto',
  minValue: 'el valor debe ser mayor o igual a %p1',
  maxValue: 'el valor debe ser menor o igual a %p1'
} as LocaleType
