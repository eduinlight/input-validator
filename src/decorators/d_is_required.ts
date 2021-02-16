import { IObjectRuleType } from '../types'

const IsRequired = (message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'required', ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default IsRequired
