import { IObjectRuleType } from '../types'

export const IsAlpha = (message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'alpha', ...(message ? { message } : {}) } as IObjectRuleType]
  }
