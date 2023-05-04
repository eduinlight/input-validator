import { IObjectRuleType } from '../types'

export const IsUppercase = (message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'uppercase', ...(message ? { message } : {}) } as IObjectRuleType]
  }
