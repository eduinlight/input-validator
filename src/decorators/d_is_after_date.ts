import { IObjectRuleType } from '../types'

const IsAfterDate = (date: string, message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'afterDate', params: [date], ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default IsAfterDate
