import { IObjectRuleType } from '../types'

export const IsMinLength = (value: number, message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'minLength', params: [value], ...(message ? { message } : {}) } as IObjectRuleType]
  }
