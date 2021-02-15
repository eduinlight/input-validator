import { IObjectRuleType } from '../types'

const IsFloat = (message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'float', ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default IsFloat
