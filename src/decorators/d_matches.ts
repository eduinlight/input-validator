import { IObjectRuleType } from '../types'

const Matches = (value: RegExp, message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'matches', params: [value], ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default Matches
