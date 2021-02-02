import { FieldError, SchemaType } from '../src/types'
import { validate, defaults } from '../src'

describe('test string rules', () => {
  test('required and email', () => {
    const form = {
      email: 'eduinlight@gmail.com'
    }

    const rules: SchemaType = {
      email: ['required', 'email']
    }

    let valid = validate(form, rules)

    expect(valid.valid).toBe(true)

    form.email = ''

    valid = validate(form, rules)

    expect(valid.valid).toBe(false)
    expect(valid.errors).toMatchObject([new FieldError('email', defaults.messages[defaults.locale].required)])
  })
})
