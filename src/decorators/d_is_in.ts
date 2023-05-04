import { IObjectRuleType } from '../types'

export const IsIn = (params: any[], message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'in', params: [params], ...(message ? { message } : {}) } as IObjectRuleType]
  }
