import { IObjectRuleType } from '../types'

export const Matches = (value: RegExp, message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'matches', params: [value], ...(message ? { message } : {}) } as IObjectRuleType]
  }
