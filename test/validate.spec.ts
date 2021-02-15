import { FieldError, SchemaType } from '../src/types'
import { validate, getMessage } from '../src'
import { IsInt, IsRequired, MinValue, NestedSchema, ValidationSchema } from '../src/decorators'

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
    expect(valid.errors).toMatchObject([new FieldError('email', getMessage('required'))])
  })

  test('exact option true', () => {
    const form = {
      email: 'eduinlight@gmail.com',
      name: 'eduin'
    }

    const rules: SchemaType = {
      email: ['required', 'email']
    }

    const valid = validate(form, rules)

    expect(valid.valid).toBe(false)

    expect(valid.errors).toMatchObject([new FieldError('data provided', 'only allowed params ["email"]')])
  })

  test('exact option false', () => {
    const form = {
      email: 'eduinlight@gmail.com',
      name: 'eduin'
    }

    const rules: SchemaType = {
      email: ['required', 'email']
    }

    const valid = validate(form, rules, { exact: false })

    expect(valid.valid).toBe(true)
  })

  test('returnValues option', () => {
    const form = {
      email: 'eduinlight@gmail.com'
    }

    const rules: SchemaType = {
      email: ['required', 'email']
    }

    const valid = validate(form, rules, { returnValues: true })

    expect(valid.values).toMatchObject(form)
  })

  test('nested Schema ', () => {
    const form = {
      email: 'eduinlight@gmail.com'
    }

    const rules: SchemaType = {
      email: ['required', 'email'],
      professional: [
        {
          rule: {
            address: ['required'],
            zipcode: ['int']
          }
        }
      ]
    }

    let valid = validate(form, rules)

    expect(valid.valid).toBe(true)

    Object.assign(form, { professional: { address: 'Cuba', zipcode: 10000 } })

    valid = validate(form, rules)

    expect(valid.valid).toBe(true)
  })

  test('nested Schema errors', () => {
    const form = {
      email: 'eduinlight@gmail.com'
    }

    const rules: SchemaType = {
      email: ['required', 'email'],
      professional: [
        'required',
        {
          rule: {
            address: ['required'],
            zipcode: ['int']
          }
        }
      ]
    }

    let valid = validate(form, rules)

    expect(valid.valid).toBe(false)
    expect(valid.errors).toMatchObject([new FieldError('professional', getMessage('required'))])

    Object.assign(form, { professional: { address: 'Cuba', zipcode: 'asd' } })

    valid = validate(form, rules)

    expect(valid.valid).toBe(false)
    expect(valid.errors).toMatchObject([new FieldError('professional', [new FieldError('zipcode', getMessage('int'))])])
  })

  describe('decorators', () => {
    @ValidationSchema()
    class Author {
      @IsRequired()
      name: string;

      @MinValue(10)
      @IsInt()
      age: number;
    }

    @ValidationSchema()
    class Book {
      @IsRequired()
      name: string;

      @NestedSchema(Author)
      author: Author
    }

    test('nested decorator', () => {
      const form = {
        name: 'cuba',
        author: {
          name: 'eduin',
          age: 10
        }
      }

      const valid = validate(form, Book as any)
      expect(valid.valid).toBe(true)
      expect(valid.errors).toMatchObject([])
    })
  })
})
