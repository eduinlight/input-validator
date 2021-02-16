import { IObjectRuleType } from '../types'

const IsUrl = (message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'url', ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default IsUrl
