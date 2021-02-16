import { IObjectRuleType } from '../types'

const IsJSON = (message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'json', ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default IsJSON
