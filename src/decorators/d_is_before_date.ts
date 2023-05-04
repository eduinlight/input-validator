import { IObjectRuleType } from '../types'

export const IsBeforeDate = (date: string, message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'beforeDate', params: [date], ...(message ? { message } : {}) } as IObjectRuleType]
  }
