import { IObjectRuleType } from '../types'

const IsDate = (message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'date', ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default IsDate
