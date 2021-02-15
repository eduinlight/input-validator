import { IObjectRuleType } from '../types'

const IsLowercase = (message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'lowercase', ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default IsLowercase
