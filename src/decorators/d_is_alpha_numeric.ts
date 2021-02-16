import { IObjectRuleType } from '../types'

const IsAlphaNumeric = (message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'alphaNumeric', ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default IsAlphaNumeric
