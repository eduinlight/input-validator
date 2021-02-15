import { IObjectRuleType } from '../types'

const IsLocale = (message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'locale', ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default IsLocale
