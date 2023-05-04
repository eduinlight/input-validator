import * as defaultMessages from './locals'
import * as defaultRules from './rules'
import { LocaleType, RuleFunctionType } from './types'

export const defaults = {
  locale: 'enUS' as keyof typeof defaultMessages,
  messages: defaultMessages,
  rules: defaultRules
}

export const getMessage = (rule: keyof typeof defaults.rules) => defaults.messages[defaults.locale][rule]

export const extendRules = (rules: Record<string, RuleFunctionType>) => {
  defaults.rules = { ...defaults.rules, ...rules }
}

export const setMessages = (locale: keyof typeof defaultMessages, messages: LocaleType) => {
  defaults.messages = { ...defaults.messages, [locale]: messages }
}

export const setLocale = (locale: keyof typeof defaultMessages) => {
  defaults.locale = locale
}
