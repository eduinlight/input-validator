import { SchemaType } from './types'

export const removeRequiredFromRules = (rules: SchemaType): SchemaType => {
  const newRules: any = {}
  Object.keys(rules).forEach(key => {
    newRules[key] = rules[key].filter(rule => {
      return (
        (typeof rule === 'string' && rule !== 'required') ||
          (typeof rule === 'object' && rule.rule !== 'required')
      )
    })
  })
  return newRules
}
