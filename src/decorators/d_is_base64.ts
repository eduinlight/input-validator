import { IObjectRuleType } from '../types'

const IsBase64 = (message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'base64', ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default IsBase64
