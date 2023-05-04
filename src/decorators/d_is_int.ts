import { IObjectRuleType } from '../types'

export const IsInt = (message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'int', ...(message ? { message } : {}) } as IObjectRuleType]
  }
