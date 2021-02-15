import { IObjectRuleType } from '../types'

const IsUppercase = (message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'uppercase', ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default IsUppercase
