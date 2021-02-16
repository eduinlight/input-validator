import { IObjectRuleType } from '../types'

const IsHexcolor = (message?: string) =>
  (target: any, key: string) => {
    const current = target[key] || []
    target[key] = [...current, { rule: 'hexcolor', ...(message ? { message } : {}) } as IObjectRuleType]
  }

export default IsHexcolor
