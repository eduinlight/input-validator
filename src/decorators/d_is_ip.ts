import { IObjectRuleType } from '../types'

export const IsIP = (message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'ip', ...(message ? { message } : {}) } as IObjectRuleType]
  }
