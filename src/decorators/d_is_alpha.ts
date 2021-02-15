import { IObjectRuleType } from '../types'

const IsAlpha = (message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'alpha', ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default IsAlpha
