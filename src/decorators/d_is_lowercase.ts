import { IObjectRuleType } from '../types'

export const IsLowercase = (message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'lowercase', ...(message ? { message } : {}) } as IObjectRuleType]
  }
