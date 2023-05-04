import { IObjectRuleType } from '../types'

export const IsHexadecimal = (message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'hexadecimal', ...(message ? { message } : {}) } as IObjectRuleType]
  }
