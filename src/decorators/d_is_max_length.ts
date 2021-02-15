import { IObjectRuleType } from '../types'

const IsMaxLength = (value: number, message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'maxLength', params: [value], ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default IsMaxLength
