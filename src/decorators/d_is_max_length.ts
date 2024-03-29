import { IObjectRuleType } from '../types'

export const IsMaxLength = (value: number, message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'maxLength', params: [value], ...(message ? { message } : {}) } as IObjectRuleType]
  }
