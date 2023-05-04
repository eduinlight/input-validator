import { IObjectRuleType } from '../types'

export const IsRequired = (message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'required', ...(message ? { message } : {}) } as IObjectRuleType]
  }
