import { IObjectRuleType } from '../types'

export const Contains = (seed: any, message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'contains', params: [seed], ...(message ? { message } : {}) } as IObjectRuleType]
  }
