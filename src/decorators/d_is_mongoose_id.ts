import { IObjectRuleType } from '../types'

export const IsMongooseId = (message?: string) =>
  (target: any, key: any) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'mongooseId', ...(message ? { message } : {}) } as IObjectRuleType]
  }
