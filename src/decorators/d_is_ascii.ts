import { IObjectRuleType } from '../types'

const IsAscii = (message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'ascii', ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default IsAscii
