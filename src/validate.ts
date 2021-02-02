import { DataType, FieldError, IObjectRuleType, IValidationResponse, PopulatedRule, RuleType, SchemaType } from './types'
import { defaults } from '.'

const messages = defaults.messages[defaults.locale]

const transformStringRule = (rule: RuleType) :PopulatedRule => {
  return new PopulatedRule(defaults.rules[rule], [], messages[rule])
}

const transformObjectRule = (rule: IObjectRuleType): PopulatedRule => {
  const populatedRule = new PopulatedRule()
  populatedRule.rule = defaults.rules[rule.rule]
  populatedRule.message = messages[rule.rule]
  populatedRule.params = []

  if (
    populatedRule.rule.length > 0 &&
            rule.params &&
            rule.params.length > 0
  ) {
    populatedRule.params = rule.params
  }

  if (rule.message) {
    populatedRule.message = rule.message
  }
  return populatedRule
}

const validate = (form: DataType, schema: SchemaType): IValidationResponse => {
  // initialize response object
  const res = {
    errors: [],
    valid: true,
    values: { ...form }
  } as IValidationResponse
  // for every schema field
  Object.keys(schema).forEach(field => {
    // get rules of the field
    const fieldRules = schema[field]

    // value of the field to answare
    res.values[field] = form[field]

    let hasError = false
    let required = false

    // for every rule of the field
    fieldRules.forEach(rule => {
      if (hasError) return

      // define the rule
      let populatedRule = new PopulatedRule()
      if (typeof rule === 'string') {
        if (rule === 'required') {
          required = true
        }

        populatedRule = transformStringRule(rule)
      } else if (typeof rule === 'object') {
        if (rule.rule === 'required') {
          required = true
        }

        populatedRule = transformObjectRule(rule)
      }

      if (
        !populatedRule.rule(
          form[field] !== undefined ? form[field].toString() : '',
          ...populatedRule.params
        )
      ) {
        res.valid = false
        // replace params on message
        populatedRule.params.forEach((param: any, i: any) => {
          populatedRule.message = populatedRule.message.replace(
            new RegExp('%p' + (i + 1), 'g'),
            JSON.stringify(param)
          )
        })
        res.errors.push(new FieldError(field, populatedRule.message))
        hasError = true
      }
    })

    if (hasError && !required && !defaults.rules.required(form[field])) {
      res.errors.pop()

      if (res.errors.length === 0) {
        res.valid = true
      }
    }
  })
  return res
}

export default validate
