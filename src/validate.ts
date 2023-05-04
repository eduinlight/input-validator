import { DataType, FieldError, IObjectRuleType, IValidationResponse, PopulatedRule, RuleType, SchemaType, ValidateOptions } from './types'
import { defaults, getMessage } from '.'

const transformStringRule = (rule: RuleType) :PopulatedRule => {
  return new PopulatedRule(defaults.rules[rule], [], getMessage(rule))
}

const transformObjectRule = (rule: IObjectRuleType): PopulatedRule => {
  const populatedRule = new PopulatedRule()
  populatedRule.rule = defaults.rules[rule.rule]
  populatedRule.message = getMessage(rule.rule)
  populatedRule.params = []

  if (
    populatedRule.rule.length > 0 &&
            rule.params &&
            rule.params.length > 0
  ) {
    populatedRule.params = rule.params
  }

  if (rule.message) {
    populatedRule.message = typeof rule.message === 'function' ? rule.message() : rule.message
  }
  return populatedRule
}

const exactSchema = (form: DataType, schema: SchemaType) => {
  const conj = new Set(Object.keys(schema))
  const formKeys = Object.keys(form)

  for (const key of formKeys) {
    if (!conj.has(key)) {
      return false
    }
  }

  return true
}

const parseOptions = (options?: ValidateOptions) => {
  const response: ValidateOptions = {
    exact: true,
    returnValues: true,
    ...options
  }

  return response
}

/**
 * Returns the average of two numbers.
 *
 * @remarks
 * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
 *
 * @param x - The first input number
 * @param y - The second input number
 * @returns The arithmetic mean of `x` and `y`
 *
 * @beta
 */
export const validate = (form: DataType, schema: SchemaType, options?: ValidateOptions): IValidationResponse => {
  const { exact, returnValues } = parseOptions(options)

  // initialize response object
  const res = {
    errors: [],
    valid: true
  } as IValidationResponse

  if (returnValues) {
    res.values = { ...form }
  }

  if (exact && !exactSchema(form, schema)) {
    res.valid = false
    res.errors = [new FieldError('data provided', `only allowed params ${JSON.stringify(Object.keys(schema))}`)]
    return res
  }

  // for every schema field
  Object.keys(schema).forEach(field => {
    // get rules of the field
    const fieldRules = schema[field]

    let hasError = false
    let required = false

    // for every rule of the field
    fieldRules.forEach(rule => {
      if (hasError) return
      const isStringRule = typeof rule === 'string'
      const isObjectRule = typeof rule === 'object' && rule.rule && typeof rule.rule === 'string'
      const isArrayRule = typeof rule === 'object' && rule.rule && Array.isArray(rule.rule)
      const isNestedRule = typeof rule === 'object' && rule.rule && typeof rule.rule === 'object'

      // define the rule
      let populatedRule = new PopulatedRule()
      if (isStringRule || isObjectRule) {
        if (isStringRule) {
          if (rule === 'required') {
            required = true
          }
          populatedRule = transformStringRule(rule as RuleType)
        } else {
          if ((rule as IObjectRuleType).rule === 'required') {
            required = true
          }

          populatedRule = transformObjectRule(rule as IObjectRuleType)
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
      } else if (isArrayRule) {
        const arrayRule = rule as {rule: [SchemaType]}
        if (arrayRule.rule.length !== 1) {
          throw new Error('array rule has only one param in the form [Schema]')
        }

        // @todo => ADD SUPPORT FOR ARRAY SCHEMA
      } else if (isNestedRule && typeof form[field] === 'object') {
        const valid = validate(form[field], (rule as {rule: SchemaType}).rule, options)
        if (!valid.valid) {
          res.valid = false
          hasError = true
          res.errors.push(new FieldError(field, valid.errors))
        }
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
