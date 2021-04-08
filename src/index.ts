import defaults, { extendRules, getMessage, setLocale, setMessages } from './defaults'
import * as locales from './locals'
import { SchemaType, FieldError } from './types'
import validate from './validate'
import validateAsync from './validateAsync'
import validateWithError from './validate_with_error'
import errorsArrayToObject from './errors_array_to_object'

export { extendRules, getMessage, setLocale, setMessages, locales, validate, validateWithError, defaults, SchemaType, FieldError, validateAsync, errorsArrayToObject }

export default validate
