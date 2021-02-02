import defaults, { extendRules, setLocale, setMessages } from './defaults'
import * as locales from './locals'
import validate from './validate'
import validateWithError from './validate_with_error'

export { extendRules, setLocale, setMessages, locales, validate, validateWithError, defaults }

export default validate
