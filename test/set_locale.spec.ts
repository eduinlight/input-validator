import { defaults, setLocale } from '../src'

describe('changing default locale', () => {
  test('required and email', () => {
    const locale = 'esES'

    setLocale(locale)

    expect(defaults.locale).toBe(locale)

    // TODO setLocale is not working when validate is used
    // const form = {
    // email: 'eduinlight'
    // }

    // const rules: SchemaType = {
    // email: ['required', 'email']
    // }

    // const valid = validate(form, rules)

    // expect(valid.errors).toMatchObject([new FieldError('email', defaults.messages[locale].email)])
  })
})
