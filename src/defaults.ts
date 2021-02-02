import defaultMessages from './locals'
import defaultRules from './rules'
import { LocaleType, RuleFunctionType } from './types'

const defaults = {
  locale: 'enUS' as keyof typeof defaultMessages,
  messages: defaultMessages,
  rules: defaultRules
}

const extendRules = (rules: Record<string, RuleFunctionType>) => {
  Object.assign(defaults, { rules: { ...defaults.rules, ...rules } })
}

const setMessages = (locale: keyof typeof defaultMessages, messages: LocaleType) => {
  Object.assign(defaults, { messages: { ...defaults.messages, [locale]: messages } })
}

const setLocale = (locale: keyof typeof defaultMessages) => {
  defaults.locale = locale
}

export { defaults, extendRules, setMessages, setLocale }

export default defaults
