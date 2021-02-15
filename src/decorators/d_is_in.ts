import { IObjectRuleType } from '../types'

const IsIn = (params: any[], message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'in', params: [params], ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default IsIn
