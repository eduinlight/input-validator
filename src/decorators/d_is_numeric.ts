import { IObjectRuleType } from '../types'

export const IsNumeric = (message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'numeric', ...(message ? { message } : {}) } as IObjectRuleType]
  }
