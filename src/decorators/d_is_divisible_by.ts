import { IObjectRuleType } from '../types'

const IsDivisibleBy = (value: number, message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'divisibleBy', params: [value], ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default IsDivisibleBy
