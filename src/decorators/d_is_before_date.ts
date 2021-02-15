import { IObjectRuleType } from '../types'

const IsBeforeDate = (date: string, message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'beforeDate', params: [date], ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default IsBeforeDate
