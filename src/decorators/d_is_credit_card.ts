import { IObjectRuleType } from '../types'

export const IsCreditCard = (message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'creditCard', ...(message ? { message } : {}) } as IObjectRuleType]
  }
