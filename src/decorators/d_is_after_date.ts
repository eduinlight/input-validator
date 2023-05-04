import { IObjectRuleType } from '../types'

export const IsAfterDate = (date: string, message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'afterDate', params: [date], ...(message ? { message } : {}) } as IObjectRuleType]
  }
