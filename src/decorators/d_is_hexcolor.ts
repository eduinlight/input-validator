import { IObjectRuleType } from '../types'

export const IsHexcolor = (message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'hexcolor', ...(message ? { message } : {}) } as IObjectRuleType]
  }
