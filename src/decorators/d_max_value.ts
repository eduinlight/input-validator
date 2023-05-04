import { IObjectRuleType } from '../types'

export const MaxValue = (value: number, message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'maxValue', params: [value], ...(message ? { message } : {}) } as IObjectRuleType]
  }
