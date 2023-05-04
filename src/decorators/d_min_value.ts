import { IObjectRuleType } from '../types'

export const MinValue = (value: number, message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'minValue', params: [value], ...(message ? { message } : {}) } as IObjectRuleType]
  }
