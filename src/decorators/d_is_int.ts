import { IObjectRuleType } from '../types'

const IsInt = (message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'int', ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default IsInt
