import { IObjectRuleType } from '../types'

export const IsAscii = (message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'ascii', ...(message ? { message } : {}) } as IObjectRuleType]
  }
