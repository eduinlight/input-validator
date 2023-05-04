import { IObjectRuleType } from '../types'

export const IsCurrency = (message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'currency', ...(message ? { message } : {}) } as IObjectRuleType]
  }
