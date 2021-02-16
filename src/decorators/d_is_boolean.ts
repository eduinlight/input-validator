import { IObjectRuleType } from '../types'

const IsBoolean = (message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'boolean', ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default IsBoolean
