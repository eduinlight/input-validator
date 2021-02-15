import { IObjectRuleType } from '../types'

const MinValue = (value: number, message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'minValue', params: [value], ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default MinValue
