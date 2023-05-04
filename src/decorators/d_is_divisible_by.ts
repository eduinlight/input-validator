import { IObjectRuleType } from '../types'

export const IsDivisibleBy = (value: number, message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'divisibleBy', params: [value], ...(message ? { message } : {}) } as IObjectRuleType]
  }
