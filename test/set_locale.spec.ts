import { defaults, setLocale } from '../src/defaults'
import { FieldError, SchemaType } from '../src/types'
import { validate } from '../src/validate'

describe('changing default locale', () => {
  test('required and email', () => {
    const locale = 'esES'

    setLocale(locale)

    expect(defaults.locale).toBe(locale)

    // TODO setLocale is not working when validate is used
    const form = {
      email: 'eduinlight'
    }

    const rules: SchemaType = {
      email: ['required', 'email']
    }

    const valid = validate(form, rules)

    expect(valid.valid).toBe(false)
    expect(valid.errors).toMatchObject([new FieldError('email', defaults.messages[locale].email)])
  })
})
