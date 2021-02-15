import { IObjectRuleType } from '../types'

const IsMongooseId = (message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'mongooseId', ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default IsMongooseId
