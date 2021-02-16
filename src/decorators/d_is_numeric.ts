import { IObjectRuleType } from '../types'

const IsNumeric = (message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'numeric', ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default IsNumeric
