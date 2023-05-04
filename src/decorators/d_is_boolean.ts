import { IObjectRuleType } from '../types'

export const IsBoolean = (message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'boolean', ...(message ? { message } : {}) } as IObjectRuleType]
  }
