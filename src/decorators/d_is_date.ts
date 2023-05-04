import { IObjectRuleType } from '../types'

export const IsDate = (message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'date', ...(message ? { message } : {}) } as IObjectRuleType]
  }
