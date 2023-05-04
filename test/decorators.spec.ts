import { Equals } from '../src/decorators/d_equals'
import { IsAlpha } from '../src/decorators/d_is_alpha'
import { IsAlphaNumeric } from '../src/decorators/d_is_alpha_numeric'
import { IsBase64 } from '../src/decorators/d_is_base64'
import { IsBoolean } from '../src/decorators/d_is_boolean'
import { IsCurrency } from '../src/decorators/d_is_currency'
import { IsDate } from '../src/decorators/d_is_date'
import { IsDivisibleBy } from '../src/decorators/d_is_divisible_by'
import { IsEmail } from '../src/decorators/d_is_email'
import { IsFloat } from '../src/decorators/d_is_float'
import { IsHexadecimal } from '../src/decorators/d_is_hexadecimal'
import { IsHexcolor } from '../src/decorators/d_is_hexcolor'
import { IsIn } from '../src/decorators/d_is_in'
import { IsInt } from '../src/decorators/d_is_int'
import { IsIP } from '../src/decorators/d_is_ip'
import { IsLocale } from '../src/decorators/d_is_locale'
import { IsLowercase } from '../src/decorators/d_is_lowercase'
import { IsMaxLength } from '../src/decorators/d_is_max_length'
import { IsMinLength } from '../src/decorators/d_is_min_length'
import { IsNumeric } from '../src/decorators/d_is_numeric'
import { IsRequired } from '../src/decorators/d_is_required'
import { IsUppercase } from '../src/decorators/d_is_uppercase'
import { IsUrl } from '../src/decorators/d_is_url'
import { Matches } from '../src/decorators/d_matches'
import { MaxValue } from '../src/decorators/d_max_value'
import { MinValue } from '../src/decorators/d_min_value'
import { NestedSchema } from '../src/decorators/d_nested_schema'
import { ValidationSchema } from '../src/decorators/d_validation_schema'

describe('test rules functions', () => {
  describe('equals', () => {
    const message = 'is not equal'

    @ValidationSchema()
    class Example {
      @Equals('eduin')
        name: string

      @Equals('eduin', message)
        lastName: string
    }

    test('check schema', () => {
      expect(Example).toMatchObject({
        name: [{ rule: 'equals', params: ['eduin'] }],
        lastName: [{ rule: 'equals', params: ['eduin'], message }]
      })
    })
  })

  describe('match', () => {
    const message = 'not match'

    @ValidationSchema()
    class Example {
      @Matches(/eduin/)
        name: string

      @Matches(/eduin/, message)
        lastName: string
    }

    test('check schema', () => {
      expect(Example).toMatchObject({
        name: [{ rule: 'matches', params: [/eduin/] }],
        lastName: [{ rule: 'matches', params: [/eduin/], message }]
      })
    })
  })

  describe('email', () => {
    const message = 'not match'

    @ValidationSchema()
    class Example {
      @IsEmail()
        name: string

      @IsEmail(message)
        lastName: string
    }

    test('check schema', () => {
      expect(Example).toMatchObject({
        name: [{ rule: 'email' }],
        lastName: [{ rule: 'email', message }]
      })
    })
  })

  describe('url', () => {
    const message = 'not match'

    @ValidationSchema()
    class Example {
      @IsUrl()
        name: string

      @IsUrl(message)
        lastName: string
    }

    test('check schema', () => {
      expect(Example).toMatchObject({
        name: [{ rule: 'url' }],
        lastName: [{ rule: 'url', message }]
      })
    })
  })

  describe('ip', () => {
    const message = 'not match'

    @ValidationSchema()
    class Example {
      @IsIP()
        name: string

      @IsIP(message)
        lastName: string
    }

    test('check schema', () => {
      expect(Example).toMatchObject({
        name: [{ rule: 'ip' }],
        lastName: [{ rule: 'ip', message }]
      })
    })
  })

  describe('alpha', () => {
    const message = 'not match'

    @ValidationSchema()
    class Example {
      @IsAlpha()
        name: string

      @IsAlpha(message)
        lastName: string
    }

    test('check schema', () => {
      expect(Example).toMatchObject({
        name: [{ rule: 'alpha' }],
        lastName: [{ rule: 'alpha', message }]
      })
    })
  })

  describe('numeric', () => {
    const message = 'not match'

    @ValidationSchema()
    class Example {
      @IsNumeric()
        name: string

      @IsNumeric(message)
        lastName: string
    }

    test('check schema', () => {
      expect(Example).toMatchObject({
        name: [{ rule: 'numeric' }],
        lastName: [{ rule: 'numeric', message }]
      })
    })
  })

  describe('alphaNumeric', () => {
    const message = 'not match'

    @ValidationSchema()
    class Example {
      @IsAlphaNumeric()
        name: string

      @IsAlphaNumeric(message)
        lastName: string
    }

    test('check schema', () => {
      expect(Example).toMatchObject({
        name: [{ rule: 'alphaNumeric' }],
        lastName: [{ rule: 'alphaNumeric', message }]
      })
    })
  })

  describe('base64', () => {
    const message = 'not match'

    @ValidationSchema()
    class Example {
      @IsBase64()
        name: string

      @IsBase64(message)
        lastName: string
    }

    test('check schema', () => {
      expect(Example).toMatchObject({
        name: [{ rule: 'base64' }],
        lastName: [{ rule: 'base64', message }]
      })
    })
  })

  describe('hexadecimal', () => {
    const message = 'not match'

    @ValidationSchema()
    class Example {
      @IsHexadecimal()
        name: string

      @IsHexadecimal(message)
        lastName: string
    }

    test('check schema', () => {
      expect(Example).toMatchObject({
        name: [{ rule: 'hexadecimal' }],
        lastName: [{ rule: 'hexadecimal', message }]
      })
    })
  })

  describe('hexcolor', () => {
    const message = 'not match'

    @ValidationSchema()
    class Example {
      @IsHexcolor()
        name: string

      @IsHexcolor(message)
        lastName: string
    }

    test('check schema', () => {
      expect(Example).toMatchObject({
        name: [{ rule: 'hexcolor' }],
        lastName: [{ rule: 'hexcolor', message }]
      })
    })
  })

  describe('lowercase', () => {
    const message = 'not match'

    @ValidationSchema()
    class Example {
      @IsLowercase()
        name: string

      @IsLowercase(message)
        lastName: string
    }

    test('check schema', () => {
      expect(Example).toMatchObject({
        name: [{ rule: 'lowercase' }],
        lastName: [{ rule: 'lowercase', message }]
      })
    })
  })

  describe('uppercase', () => {
    const message = 'not match'

    @ValidationSchema()
    class Example {
      @IsUppercase()
        name: string

      @IsUppercase(message)
        lastName: string
    }

    test('check schema', () => {
      expect(Example).toMatchObject({
        name: [{ rule: 'uppercase' }],
        lastName: [{ rule: 'uppercase', message }]
      })
    })
  })

  describe('int', () => {
    const message = 'not match'

    @ValidationSchema()
    class Example {
      @IsInt()
        name: string

      @IsInt(message)
        lastName: string
    }

    test('check schema', () => {
      expect(Example).toMatchObject({
        name: [{ rule: 'int' }],
        lastName: [{ rule: 'int', message }]
      })
    })
  })

  describe('float', () => {
    const message = 'not match'

    @ValidationSchema()
    class Example {
      @IsFloat()
        name: string

      @IsFloat(message)
        lastName: string
    }

    test('check schema', () => {
      expect(Example).toMatchObject({
        name: [{ rule: 'float' }],
        lastName: [{ rule: 'float', message }]
      })
    })
  })

  describe('divisibleBy', () => {
    const message = 'age is required'

    @ValidationSchema()
    class Example {
      @IsDivisibleBy(4)
        name: string

      @IsDivisibleBy(4, message)
        age: string
    }

    test('check schema', () => {
      expect(Example).toMatchObject({
        name: [{ rule: 'divisibleBy', params: [4] }],
        age: [{ rule: 'divisibleBy', params: [4], message }]
      })
    })
  })

  describe('required', () => {
    const message = 'age is required'

    @ValidationSchema()
    class Example {
      @IsRequired()
        name: string

      @IsRequired(message)
        age: string
    }

    test('check schema', () => {
      expect(Example).toMatchObject({
        name: [{ rule: 'required' }],
        age: [{ rule: 'required', message }]
      })
    })
  })

  describe('minValue', () => {
    const message = 'age is required'

    @ValidationSchema()
    class Example {
      @MinValue(4)
        name: string

      @MinValue(4, message)
        age: string
    }

    test('check schema', () => {
      expect(Example).toMatchObject({
        name: [{ rule: 'minValue', params: [4] }],
        age: [{ rule: 'minValue', params: [4], message }]
      })
    })
  })

  describe('minValue', () => {
    const message = 'age is required'

    @ValidationSchema()
    class Example {
      @MaxValue(4)
        name: string

      @MaxValue(4, message)
        age: string
    }

    test('check schema', () => {
      expect(Example).toMatchObject({
        name: [{ rule: 'maxValue', params: [4] }],
        age: [{ rule: 'maxValue', params: [4], message }]
      })
    })
  })

  describe('minLength', () => {
    const message = 'age is required'

    @ValidationSchema()
    class Example {
      @IsMinLength(4)
        name: string

      @IsMinLength(4, message)
        age: string
    }

    test('check schema', () => {
      expect(Example).toMatchObject({
        name: [{ rule: 'minLength', params: [4] }],
        age: [{ rule: 'minLength', params: [4], message }]
      })
    })
  })

  describe('maxLength', () => {
    const message = 'age is required'

    @ValidationSchema()
    class Example {
      @IsMaxLength(4)
        name: string

      @IsMaxLength(4, message)
        age: string
    }

    test('check schema', () => {
      expect(Example).toMatchObject({
        name: [{ rule: 'maxLength', params: [4] }],
        age: [{ rule: 'maxLength', params: [4], message }]
      })
    })
  })

  describe('date', () => {
    const message = 'not match'

    @ValidationSchema()
    class Example {
      @IsDate()
        name: string

      @IsDate(message)
        lastName: string
    }

    test('check schema', () => {
      expect(Example).toMatchObject({
        name: [{ rule: 'date' }],
        lastName: [{ rule: 'date', message }]
      })
    })
  })

  describe('in', () => {
    const message = 'age is required'

    @ValidationSchema()
    class Example {
      @IsIn(['1', '2'])
        name: string

      @IsIn(['1', '2'], message)
        age: string
    }

    test('check schema', () => {
      expect(Example).toMatchObject({
        name: [{ rule: 'in', params: [['1', '2']] }],
        age: [{ rule: 'in', params: [['1', '2']], message }]
      })
    })
  })

  describe('boolean', () => {
    const message = 'not match'

    @ValidationSchema()
    class Example {
      @IsBoolean()
        name: string

      @IsBoolean(message)
        lastName: string
    }

    test('check schema', () => {
      expect(Example).toMatchObject({
        name: [{ rule: 'boolean' }],
        lastName: [{ rule: 'boolean', message }]
      })
    })
  })

  describe('locale', () => {
    const message = 'not match'

    @ValidationSchema()
    class Example {
      @IsLocale()
        name: string

      @IsLocale(message)
        lastName: string
    }

    test('check schema', () => {
      expect(Example).toMatchObject({
        name: [{ rule: 'locale' }],
        lastName: [{ rule: 'locale', message }]
      })
    })
  })

  describe('currency', () => {
    const message = 'not match'

    @ValidationSchema()
    class Example {
      @IsCurrency()
        name: string

      @IsCurrency(message)
        lastName: string
    }

    test('check schema', () => {
      expect(Example).toMatchObject({
        name: [{ rule: 'currency' }],
        lastName: [{ rule: 'currency', message }]
      })
    })
  })

  describe('nestedObject', () => {
    @ValidationSchema()
    class Nested {
      @IsDate()
      @IsRequired()
        param1: string
    }

    @ValidationSchema()
    class Example {
      @IsRequired()
        name: string

      @NestedSchema(Nested)
        nested: Nested
    }

    test('check schema', () => {
      expect(Example).toMatchObject({
        name: [{ rule: 'required' }],
        nested: [{ rule: { param1: [{ rule: 'required' }, { rule: 'date' }] } }]
      })
    })
  })
})
