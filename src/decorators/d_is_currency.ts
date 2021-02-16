import { IObjectRuleType } from '../types'

const IsCurrency = (message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'currency', ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default IsCurrency
