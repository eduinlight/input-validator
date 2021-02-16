import { IObjectRuleType } from '../types'

const IsIP = (message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'ip', ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default IsIP
