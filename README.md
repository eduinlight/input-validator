# Input Validator

![npm type definitions](https://img.shields.io/npm/types/@eduinlight/input-validator?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/min/@eduinlight/input-validator?style=flat-square)
![browser support](https://img.shields.io/badge/browser-supported-green)
![decorators supported](https://img.shields.io/badge/decorators-supported-orange)

This library was written using the [validator](https://www.npmjs.com/package/validator) functions. The main reason why this library come up was for simplicity on input validations.

For more detailed documentation please visit [https://eduinlight.github.io/input-validator](https://eduinlight.github.io/input-validator/).

## Install

```BASH
npm install @eduinlight/input-validator
```

### Browser support

````HTML
<script src="https://unpkg.com/@eduinlight/input-validator/dist/index.umd.min.js"></script>
````

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
  mongooseId,
  currency**.

A **Rule** can be of tree types, a *string rule* an *object rule* and a *nested schema rule*.

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

A *nested schema rule* has the following form:
```
const objRule = {
  rule: Schema, // here you can use a nested schema to test child objects
}
```

### Full schema example
```TS
const schema = {
  name: ['required'],
  email: ['required', 'email'],
  age: ['required', 'int', {rule: 'min', param: [20]}],
  professional: [
    'required',
    {
      rule: {
        address: ["required"],
        // any check to nested professional object
      }
    }
  ]
}
```

## Defining a schema using decorators
This library fully support the use of decorators. The declaration list is in reverse order of declaration. Please see the next example:

```TS
import { 
  IsInt, 
  IsRequired, 
  MinValue, 
  NestedSchema, 
  ValidationSchema 
} from '@eduinlight/input-validator/dist/decorators'

@ValidationSchema() //use this special decorator to generate a schema of your class
class Author {
  @IsRequired()
  name: string;

  @MinValue(10) //and second check if the value is bigger than 10
  @IsInt()      //check if is int first
  age: number;
}

@ValidationSchema()
class Book {
  @IsRequired()
  name: string;

  @NestedSchema(Author) //use this spcial decorator to generate a nested schema
  author: Author
}
```

## Validate

First you need to import the validate function.
```TS
import {validate} from '@eduinlight/input-validator'
```

The validate function receive 3 parameters, the data, the schema, and options.

```TS
const form = {
  name: 'Eduin Garcia Cordero',
  email: 'eduinlight@gmail.com',
  age: 33
}

const response = validate(form, schema, {exact: true})
// both expressions are equals
// const response = validate(form, schema)

if(response.valid) {
  // instructions for a valid form
} else {
  console.log(response.errors)
  // instructions for an invalid form
}
```

**options** is an object in the form:

```TS
{
  // default to true 
  // verify if the form has no other attributes than the ones specified in the schema
  exact?: boolean,
  // default to false
  // insert into the response the value attribute that contains all validated data
  returnValues?: boolean,
}
```

### Validate using a Decorated Schema
```TS
const form = {
  name: 'cuba',
  author: {
    name: 'eduin',
    age: 10
  }
}

const valid = validate(form, Book)
```

### Errors
Errors are described recursively as follow:

```TS
[{ field: string, error: string | Errors }]
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
