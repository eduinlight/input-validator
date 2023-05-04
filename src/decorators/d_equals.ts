import { IObjectRuleType } from '../types'

export const Equals = (seed: string, message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'equals', params: [seed], ...(message ? { message } : {}) } as IObjectRuleType]
  }
