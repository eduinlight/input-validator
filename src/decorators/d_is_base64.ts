import { IObjectRuleType } from '../types'

export const IsBase64 = (message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'base64', ...(message ? { message } : {}) } as IObjectRuleType]
  }
