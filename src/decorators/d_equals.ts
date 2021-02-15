import { IObjectRuleType } from '../types'

const Equals = (seed: string, message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'equals', params: [seed], ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default Equals
