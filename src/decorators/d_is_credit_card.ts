import { IObjectRuleType } from '../types'

const IsCreditCard = (message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'creditCard', ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default IsCreditCard
