import { IObjectRuleType } from '../types'

const Contains = (seed: any, message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'contains', params: [seed], ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default Contains
