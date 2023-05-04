import { IObjectRuleType } from '../types'

export const IsEmail = (message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'email', ...(message ? { message } : {}) } as IObjectRuleType]
  }
