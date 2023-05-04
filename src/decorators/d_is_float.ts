import { IObjectRuleType } from '../types'

export const IsFloat = (message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'float', ...(message ? { message } : {}) } as IObjectRuleType]
  }
