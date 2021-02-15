import { IObjectRuleType } from '../types'

const IsHexadecimal = (message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'hexadecimal', ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default IsHexadecimal
