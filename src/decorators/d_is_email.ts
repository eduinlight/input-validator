import { IObjectRuleType } from '../types'

const IsEmail = (message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'email', ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default IsEmail
