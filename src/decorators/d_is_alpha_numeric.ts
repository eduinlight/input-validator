import { IObjectRuleType } from '../types'

export const IsAlphaNumeric = (message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'alphaNumeric', ...(message ? { message } : {}) } as IObjectRuleType]
  }
