import { IObjectRuleType } from '../types'

export const IsLocale = (message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'locale', ...(message ? { message } : {}) } as IObjectRuleType]
  }
