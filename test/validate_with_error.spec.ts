import { defaults } from '../src/defaults'
import { FieldError, InputError, SchemaType } from '../src/types'
import { validateWithError } from '../src/validate_with_error'

describe('test string rules', () => {
  test('required and email', () => {
    try {
      const form = {
        email: 'eduinlight@gmail.com'
      }

      const rules: SchemaType = {
        email: ['required', 'email']
      }

      validateWithError(form, rules)

      form.email = ''

      validateWithError(form, rules)
    } catch (error) {
      expect((error as InputError).errors).toMatchObject([new FieldError('email', defaults.messages[defaults.locale].required)])
    }
  })
})
