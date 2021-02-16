import { IObjectRuleType } from '../types'

const IsMinLength = (value: number, message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'minLength', params: [value], ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default IsMinLength
