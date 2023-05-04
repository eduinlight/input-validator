import { IObjectRuleType } from '../types'

export const IsJSON = (message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'json', ...(message ? { message } : {}) } as IObjectRuleType]
  }
