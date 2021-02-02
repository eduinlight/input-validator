# Input Validator

![npm type definitions](https://img.shields.io/npm/types/@eduinlight/input-validator?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/min/@eduinlight/input-validator?style=flat-square)

This library was writed over [validator](https://www.npmjs.com/package/validator). The main reason why this library come up was form simplicity on input validations.

## Usage

### Defining a Schema

A *Schema* can be defined on the following form: 
```TS
const schema = {
  attribute1: Rule[],
  attribute2: Rule[],
  .
  .
  .
}
```

### Defining a list of Rules

A Rule can be any of the string-check functions of the *validator* library mentioned above:
  **equals,
  contains,
  matches,
  email,
  url,
  ip,
  alpha,
  numeric,
  alphaNumeric,
  base64,
  hexadecimal,
  hexcolor,
  lowercase,
  uppercase,
  int,
  float,
  divisibleBy,
  required,
  minLength,
  maxLength,
  date,
  afterDate,
  beforeDate,
  in,
  creditCard,
  json,
  ascii,
  boolean,
  locale,
  currency**.

A **Rule** can be of two types, a *string rule* and an *object rule*.

You can define a list of *string rules* as follow:
```TS
const rules = ['required', 'email'....]; // any rule with 0 params
```

An *object rule* has the following form:
```
const objRule = {
  rule: Rule, // any mentioned above rules
  params?: [param1, param2, param3], // the list of params needed by the rule
  message?: string
}
```

### Full schema example
```TS
const schema = {
  name: ['required'],
  email: ['required', 'email'],
  age: ['required', 'int', {rule: 'min', param: [20]}],
}
```

## Validate

First you need to import the validate function.
```TS
import validate from '@eduinlight/input-validator'
//or
import {validate} from '@eduinlight/input-validator'
```

The validate function receive two params, the data and the schema.

```TS
const form = {
  name: 'Eduin Garcia Cordero',
  email: 'eduinlight@gmail.com',
  age: 33
}

const response = validate(form, schema)

if(response.valid) {
  // instructions for a valid form
} else {
  console.log(response.errors)
  // instructions for an invalid form
}

```

### Errors
Errors are described as a list of:

```TS
{ field: string, error: string }
```

## Tests

Tests are using jest, to run the tests use:

```sh
$ npm run test
```

## Maintainers

- [eduinlight](https://github.com/eduinlight) - **Eduin Garcia Cordero** (author)

## License (MIT)
```
Copyright (c) 2018 Chris O'Hara <cohara87@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
