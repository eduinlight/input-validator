import { rules } from '../src'

describe('test rules functions', () => {
  describe('equals', () => {
    test('true', () => {
      expect(rules.equals('cuba', 'cuba')).toBe(true)
    })
    test('false', () => {
      expect(rules.equals('cuba', 'z')).toBe(false)
    })
  })

  describe('match', () => {
    test('true', () => {
      expect(rules.matches('cuba', /a/)).toBe(true)
    })
    test('false', () => {
      expect(rules.matches('cuba', /z/)).toBe(false)
    })
  })

  describe('email', () => {
    test('true', () => {
      expect(rules.email('cuba@gmail.com')).toBe(true)
    })
    test('false', () => {
      expect(rules.email('cuba')).toBe(false)
    })
  })

  describe('url', () => {
    test('true', () => {
      expect(rules.url('http://cuba.cu')).toBe(true)
    })
    test('false', () => {
      expect(rules.url('cuba')).toBe(false)
    })
  })

  describe('ip', () => {
    test('true', () => {
      expect(rules.ip('10.2.2.2')).toBe(true)
    })
    test('false', () => {
      expect(rules.ip('10.280.3.3')).toBe(false)
    })
  })

  describe('alpha', () => {
    test('true', () => {
      expect(rules.alpha('cuba')).toBe(true)
    })
    test('false', () => {
      expect(rules.alpha('c uba')).toBe(false)
    })
  })

  describe('numeric', () => {
    test('true', () => {
      expect(rules.numeric('239')).toBe(true)
      expect(rules.numeric('2.3')).toBe(true)
    })
    test('false', () => {
      expect(rules.numeric('cuba')).toBe(false)
    })
  })

  describe('alphaNumeric', () => {
    test('true', () => {
      expect(rules.alphaNumeric('cuba1')).toBe(true)
    })
    test('false', () => {
      expect(rules.alphaNumeric('cuba ')).toBe(false)
    })
  })

  describe('base64', () => {
    test('true', () => {
      expect(rules.base64('uBa=')).toBe(true)
    })
    test('false', () => {
      expect(rules.base64('cuba.')).toBe(false)
    })
  })

  describe('hexadecimal', () => {
    test('true', () => {
      expect(rules.hexadecimal('0123ABCDEF')).toBe(true)
    })
    test('false', () => {
      expect(rules.hexadecimal('123G')).toBe(false)
    })
  })

  describe('hexcolor', () => {
    test('true', () => {
      expect(rules.hexcolor('#FFF')).toBe(true)
      expect(rules.hexcolor('#FFFFFF')).toBe(true)
    })
    test('false', () => {
      expect(rules.hexcolor('#GGG')).toBe(false)
    })
  })

  describe('lowercase', () => {
    test('true', () => {
      expect(rules.lowercase('cuba')).toBe(true)
    })
    test('false', () => {
      expect(rules.lowercase('Cuba')).toBe(false)
    })
  })

  describe('uppercase', () => {
    test('true', () => {
      expect(rules.uppercase('CUBA')).toBe(true)
    })
    test('false', () => {
      expect(rules.uppercase('cuba')).toBe(false)
    })
  })

  describe('int', () => {
    test('true', () => {
      expect(rules.int('234')).toBe(true)
    })
    test('false', () => {
      expect(rules.float('2,34')).toBe(false)
    })
  })

  describe('float', () => {
    test('true', () => {
      expect(rules.float('2.34')).toBe(true)
    })
    test('false', () => {
      expect(rules.float('a234')).toBe(false)
    })
  })

  describe('divisibleBy', () => {
    test('true', () => {
      expect(rules.divisibleBy('25', 5)).toBe(true)
      expect(rules.divisibleBy('2.2', 1.1)).toBe(true)
    })
    test('false', () => {
      expect(rules.divisibleBy('25', 3)).toBe(false)
    })
  })

  describe('required', () => {
    test('true', () => {
      expect(rules.required('cuba')).toBe(true)
    })
    test('false', () => {
      expect(rules.required('')).toBe(false)
    })
  })

  describe('minLength', () => {
    test('true', () => {
      expect(rules.minLength('CUBA', 4)).toBe(true)
    })
    test('false', () => {
      expect(rules.minLength('cuba', 5)).toBe(false)
    })
  })

  describe('maxLength', () => {
    test('true', () => {
      expect(rules.maxLength('CUBA', 4)).toBe(true)
    })
    test('false', () => {
      expect(rules.maxLength('cuba', 3)).toBe(false)
    })
  })

  describe('date', () => {
    test('true', () => {
      expect(rules.date(new Date().toISOString())).toBe(true)
    })
    test('false', () => {
      expect(rules.date('01/13/2000')).toBe(false)
    })
  })

  describe('in', () => {
    test('true', () => {
      expect(rules.in('1', [1, 2, 3])).toBe(true)
    })
    test('false', () => {
      expect(rules.in('4', [1, 2, 3])).toBe(false)
    })
  })

  describe('boolean', () => {
    test('true', () => {
      expect(rules.boolean('true')).toBe(true)
    })
    test('false', () => {
      expect(rules.boolean('23')).toBe(false)
    })
  })

  describe('locale', () => {
    test('true', () => {
      expect(rules.locale('en_US')).toBe(true)
    })
    test('false', () => {
      expect(rules.locale('23')).toBe(false)
    })
  })

  describe('currency', () => {
    test('true', () => {
      expect(rules.currency('$23.34')).toBe(true)
    })
    test('false', () => {
      expect(rules.currency('cuba')).toBe(false)
    })
  })
})
