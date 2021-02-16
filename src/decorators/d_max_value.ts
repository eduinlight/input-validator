import { IObjectRuleType } from '../types'

const MaxValue = (value: number, message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'maxValue', params: [value], ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default MaxValue
