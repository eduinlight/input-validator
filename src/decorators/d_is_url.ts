import { IObjectRuleType } from '../types'

export const IsUrl = (message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'url', ...(message ? { message } : {}) } as IObjectRuleType]
  }
