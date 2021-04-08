[@eduinlight/input-validator](README.md) / Exports

# @eduinlight/input-validator

## Table of contents

### References

- [default](modules.md#default)

### Namespaces

- [locales](modules/locales.md)

### Classes

- [FieldError](classes/fielderror.md)

### Type aliases

- [SchemaType](modules.md#schematype)

### Variables

- [defaults](modules.md#defaults)

### Functions

- [extendRules](modules.md#extendrules)
- [getMessage](modules.md#getmessage)
- [setLocale](modules.md#setlocale)
- [setMessages](modules.md#setmessages)
- [validate](modules.md#validate)
- [validateWithError](modules.md#validatewitherror)

## References

### default

Renames and exports: [validate](modules.md#validate)

## Type aliases

### SchemaType

Ƭ **SchemaType**: *Record*<string, (RuleType \| IObjectRuleType \| { `rule`: [*SchemaType*](modules.md#schematype) \| [[*SchemaType*](modules.md#schematype)]  })[]\>

Defined in: [types.ts:20](https://github.com/eduinlight/input-validator/blob/2de5682/src/types.ts#L20)

## Variables

### defaults

• `Const` **defaults**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`locale` | *enUS* \| *esES* |
`messages` | *object* |
`messages.enUS` | LocaleType |
`messages.esES` | LocaleType |
`rules` | *object* |
`rules.afterDate` | (`str`: *string*, `date`: *string*) => *boolean* |
`rules.alpha` | (`str`: *string*) => *boolean* |
`rules.alphaNumeric` | (`str`: *string*) => *boolean* |
`rules.ascii` | (`str`: *string*) => *boolean* |
`rules.base64` | (`str`: *string*) => *boolean* |
`rules.beforeDate` | (`str`: *string*, `date`: *string*) => *boolean* |
`rules.boolean` | (`str`: *string*) => *boolean* |
`rules.contains` | (`str`: *string*, `seed`: *any*) => *boolean* |
`rules.creditCard` | (`str`: *string*) => *boolean* |
`rules.currency` | (`str`: *string*) => *boolean* |
`rules.date` | (`str`: *string*) => *boolean* |
`rules.divisibleBy` | (`str`: *string*, `value`: *number*) => *boolean* |
`rules.email` | (`str`: *string*) => *boolean* |
`rules.equals` | (`str`: *string*, `to`: *string*) => *boolean* |
`rules.float` | (`str`: *string*) => *boolean* |
`rules.hexadecimal` | (`str`: *string*) => *boolean* |
`rules.hexcolor` | (`str`: *string*) => *boolean* |
`rules.in` | (`str`: *string*, `values`: *any*[]) => *boolean* |
`rules.int` | (`str`: *string*) => *boolean* |
`rules.ip` | (`str`: *string*) => *boolean* |
`rules.json` | (`str`: *string*) => *boolean* |
`rules.locale` | (`str`: *string*) => *boolean* |
`rules.lowercase` | (`str`: *string*) => *boolean* |
`rules.matches` | (`str`: *string*, `regexp`: *RegExp*) => *boolean* |
`rules.maxLength` | (`str`: *string*, `value`: *number*) => *boolean* |
`rules.maxValue` | (`str`: *string*, `value`: *number*) => *boolean* |
`rules.minLength` | (`str`: *string*, `value`: *number*) => *boolean* |
`rules.minValue` | (`str`: *string*, `value`: *number*) => *boolean* |
`rules.mongooseId` | (`str`: *string*) => *boolean* |
`rules.numeric` | (`str`: *string*) => *boolean* |
`rules.required` | (`str`: *string*) => *boolean* |
`rules.uppercase` | (`str`: *string*) => *boolean* |
`rules.url` | (`str`: *string*) => *boolean* |

Defined in: [defaults.ts:5](https://github.com/eduinlight/input-validator/blob/2de5682/src/defaults.ts#L5)

## Functions

### extendRules

▸ `Const`**extendRules**(`rules`: *Record*<string, RuleFunctionType\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`rules` | *Record*<string, RuleFunctionType\> |

**Returns:** *void*

Defined in: [defaults.ts:13](https://github.com/eduinlight/input-validator/blob/2de5682/src/defaults.ts#L13)

___

### getMessage

▸ `Const`**getMessage**(`rule`: *boolean* \| *equals* \| *contains* \| *matches* \| *email* \| *url* \| *ip* \| *alpha* \| *numeric* \| *alphaNumeric* \| *base64* \| *hexadecimal* \| *hexcolor* \| *lowercase* \| *uppercase* \| *int* \| *float* \| *divisibleBy* \| *required* \| *minLength* \| *maxLength* \| *date* \| *afterDate* \| *beforeDate* \| *in* \| *creditCard* \| *json* \| *ascii* \| *locale* \| *currency* \| *mongooseId* \| *minValue* \| *maxValue*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`rule` | *boolean* \| *equals* \| *contains* \| *matches* \| *email* \| *url* \| *ip* \| *alpha* \| *numeric* \| *alphaNumeric* \| *base64* \| *hexadecimal* \| *hexcolor* \| *lowercase* \| *uppercase* \| *int* \| *float* \| *divisibleBy* \| *required* \| *minLength* \| *maxLength* \| *date* \| *afterDate* \| *beforeDate* \| *in* \| *creditCard* \| *json* \| *ascii* \| *locale* \| *currency* \| *mongooseId* \| *minValue* \| *maxValue* |

**Returns:** *string*

Defined in: [defaults.ts:11](https://github.com/eduinlight/input-validator/blob/2de5682/src/defaults.ts#L11)

___

### setLocale

▸ `Const`**setLocale**(`locale`: *enUS* \| *esES*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`locale` | *enUS* \| *esES* |

**Returns:** *void*

Defined in: [defaults.ts:21](https://github.com/eduinlight/input-validator/blob/2de5682/src/defaults.ts#L21)

___

### setMessages

▸ `Const`**setMessages**(`locale`: *enUS* \| *esES*, `messages`: LocaleType): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`locale` | *enUS* \| *esES* |
`messages` | LocaleType |

**Returns:** *void*

Defined in: [defaults.ts:17](https://github.com/eduinlight/input-validator/blob/2de5682/src/defaults.ts#L17)

___

### validate

▸ `Const`**validate**(`form`: *Record*<string, any\>, `schema`: *Record*<string, (*boolean* \| *equals* \| *contains* \| *matches* \| *email* \| *url* \| *ip* \| *alpha* \| *numeric* \| *alphaNumeric* \| *base64* \| *hexadecimal* \| *hexcolor* \| *lowercase* \| *uppercase* \| *int* \| *float* \| *divisibleBy* \| *required* \| *minLength* \| *maxLength* \| *date* \| *afterDate* \| *beforeDate* \| *in* \| *creditCard* \| *json* \| *ascii* \| *locale* \| *currency* \| *mongooseId* \| *minValue* \| *maxValue* \| IObjectRuleType \| { `rule`: *Record*<string, (*boolean* \| *equals* \| *contains* \| *matches* \| *email* \| *url* \| *ip* \| *alpha* \| *numeric* \| *alphaNumeric* \| *base64* \| *hexadecimal* \| *hexcolor* \| *lowercase* \| *uppercase* \| *int* \| *float* \| *divisibleBy* \| *required* \| *minLength* \| *maxLength* \| *date* \| *afterDate* \| *beforeDate* \| *in* \| *creditCard* \| *json* \| *ascii* \| *locale* \| *currency* \| *mongooseId* \| *minValue* \| *maxValue* \| IObjectRuleType \| { rule: Record<string, ("boolean" \| "equals" \| "contains" \| "matches" \| "email" \| "url" \| "ip" \| "alpha" \| "numeric" \| "alphaNumeric" \| "base64" \| "hexadecimal" \| "hexcolor" \| "lowercase" \| ... 20 more ... \| ...)[]\> \| [...]; })[]\> \| [*Record*<string, (*boolean* \| *equals* \| *contains* \| *matches* \| *email* \| *url* \| *ip* \| *alpha* \| *numeric* \| *alphaNumeric* \| *base64* \| *hexadecimal* \| *hexcolor* \| *lowercase* \| *uppercase* \| *int* \| *float* \| *divisibleBy* \| *required* \| *minLength* \| *maxLength* \| *date* \| *afterDate* \| *beforeDate* \| *in* \| *creditCard* \| *json* \| *ascii* \| *locale* \| *currency* \| *mongooseId* \| *minValue* \| *maxValue* \| IObjectRuleType \| { rule: Record<string, ("boolean" \| "equals" \| "contains" \| "matches" \| "email" \| "url" \| "ip" \| "alpha" \| "numeric" \| "alphaNumeric" \| "base64" \| "hexadecimal" \| "hexcolor" \| "lowercase" \| ... 20 more ... \| ...)[]\> \| [...]; })[]\>]  })[]\>, `options?`: ValidateOptions): IValidationResponse

Returns the average of two numbers.

**`remarks`** 
This method is part of the {@link core-library#Statistics | Statistics subsystem}.

**`beta`** 

#### Parameters:

Name | Type |
:------ | :------ |
`form` | *Record*<string, any\> |
`schema` | *Record*<string, (*boolean* \| *equals* \| *contains* \| *matches* \| *email* \| *url* \| *ip* \| *alpha* \| *numeric* \| *alphaNumeric* \| *base64* \| *hexadecimal* \| *hexcolor* \| *lowercase* \| *uppercase* \| *int* \| *float* \| *divisibleBy* \| *required* \| *minLength* \| *maxLength* \| *date* \| *afterDate* \| *beforeDate* \| *in* \| *creditCard* \| *json* \| *ascii* \| *locale* \| *currency* \| *mongooseId* \| *minValue* \| *maxValue* \| IObjectRuleType \| { `rule`: *Record*<string, (*boolean* \| *equals* \| *contains* \| *matches* \| *email* \| *url* \| *ip* \| *alpha* \| *numeric* \| *alphaNumeric* \| *base64* \| *hexadecimal* \| *hexcolor* \| *lowercase* \| *uppercase* \| *int* \| *float* \| *divisibleBy* \| *required* \| *minLength* \| *maxLength* \| *date* \| *afterDate* \| *beforeDate* \| *in* \| *creditCard* \| *json* \| *ascii* \| *locale* \| *currency* \| *mongooseId* \| *minValue* \| *maxValue* \| IObjectRuleType \| { rule: Record<string, ("boolean" \| "equals" \| "contains" \| "matches" \| "email" \| "url" \| "ip" \| "alpha" \| "numeric" \| "alphaNumeric" \| "base64" \| "hexadecimal" \| "hexcolor" \| "lowercase" \| ... 20 more ... \| ...)[]\> \| [...]; })[]\> \| [*Record*<string, (*boolean* \| *equals* \| *contains* \| *matches* \| *email* \| *url* \| *ip* \| *alpha* \| *numeric* \| *alphaNumeric* \| *base64* \| *hexadecimal* \| *hexcolor* \| *lowercase* \| *uppercase* \| *int* \| *float* \| *divisibleBy* \| *required* \| *minLength* \| *maxLength* \| *date* \| *afterDate* \| *beforeDate* \| *in* \| *creditCard* \| *json* \| *ascii* \| *locale* \| *currency* \| *mongooseId* \| *minValue* \| *maxValue* \| IObjectRuleType \| { rule: Record<string, ("boolean" \| "equals" \| "contains" \| "matches" \| "email" \| "url" \| "ip" \| "alpha" \| "numeric" \| "alphaNumeric" \| "base64" \| "hexadecimal" \| "hexcolor" \| "lowercase" \| ... 20 more ... \| ...)[]\> \| [...]; })[]\>]  })[]\> |
`options?` | ValidateOptions |

**Returns:** IValidationResponse

The arithmetic mean of `x` and `y`

Defined in: [validate.ts:63](https://github.com/eduinlight/input-validator/blob/2de5682/src/validate.ts#L63)

___

### validateWithError

▸ `Const`**validateWithError**(`form`: *Record*<string, any\>, `schema`: *Record*<string, (*boolean* \| *equals* \| *contains* \| *matches* \| *email* \| *url* \| *ip* \| *alpha* \| *numeric* \| *alphaNumeric* \| *base64* \| *hexadecimal* \| *hexcolor* \| *lowercase* \| *uppercase* \| *int* \| *float* \| *divisibleBy* \| *required* \| *minLength* \| *maxLength* \| *date* \| *afterDate* \| *beforeDate* \| *in* \| *creditCard* \| *json* \| *ascii* \| *locale* \| *currency* \| *mongooseId* \| *minValue* \| *maxValue* \| IObjectRuleType \| { `rule`: *Record*<string, (*boolean* \| *equals* \| *contains* \| *matches* \| *email* \| *url* \| *ip* \| *alpha* \| *numeric* \| *alphaNumeric* \| *base64* \| *hexadecimal* \| *hexcolor* \| *lowercase* \| *uppercase* \| *int* \| *float* \| *divisibleBy* \| *required* \| *minLength* \| *maxLength* \| *date* \| *afterDate* \| *beforeDate* \| *in* \| *creditCard* \| *json* \| *ascii* \| *locale* \| *currency* \| *mongooseId* \| *minValue* \| *maxValue* \| IObjectRuleType \| { rule: Record<string, ("boolean" \| "equals" \| "contains" \| "matches" \| "email" \| "url" \| "ip" \| "alpha" \| "numeric" \| "alphaNumeric" \| "base64" \| "hexadecimal" \| "hexcolor" \| "lowercase" \| ... 20 more ... \| ...)[]\> \| [...]; })[]\> \| [*Record*<string, (*boolean* \| *equals* \| *contains* \| *matches* \| *email* \| *url* \| *ip* \| *alpha* \| *numeric* \| *alphaNumeric* \| *base64* \| *hexadecimal* \| *hexcolor* \| *lowercase* \| *uppercase* \| *int* \| *float* \| *divisibleBy* \| *required* \| *minLength* \| *maxLength* \| *date* \| *afterDate* \| *beforeDate* \| *in* \| *creditCard* \| *json* \| *ascii* \| *locale* \| *currency* \| *mongooseId* \| *minValue* \| *maxValue* \| IObjectRuleType \| { rule: Record<string, ("boolean" \| "equals" \| "contains" \| "matches" \| "email" \| "url" \| "ip" \| "alpha" \| "numeric" \| "alphaNumeric" \| "base64" \| "hexadecimal" \| "hexcolor" \| "lowercase" \| ... 20 more ... \| ...)[]\> \| [...]; })[]\>]  })[]\>): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`form` | *Record*<string, any\> |
`schema` | *Record*<string, (*boolean* \| *equals* \| *contains* \| *matches* \| *email* \| *url* \| *ip* \| *alpha* \| *numeric* \| *alphaNumeric* \| *base64* \| *hexadecimal* \| *hexcolor* \| *lowercase* \| *uppercase* \| *int* \| *float* \| *divisibleBy* \| *required* \| *minLength* \| *maxLength* \| *date* \| *afterDate* \| *beforeDate* \| *in* \| *creditCard* \| *json* \| *ascii* \| *locale* \| *currency* \| *mongooseId* \| *minValue* \| *maxValue* \| IObjectRuleType \| { `rule`: *Record*<string, (*boolean* \| *equals* \| *contains* \| *matches* \| *email* \| *url* \| *ip* \| *alpha* \| *numeric* \| *alphaNumeric* \| *base64* \| *hexadecimal* \| *hexcolor* \| *lowercase* \| *uppercase* \| *int* \| *float* \| *divisibleBy* \| *required* \| *minLength* \| *maxLength* \| *date* \| *afterDate* \| *beforeDate* \| *in* \| *creditCard* \| *json* \| *ascii* \| *locale* \| *currency* \| *mongooseId* \| *minValue* \| *maxValue* \| IObjectRuleType \| { rule: Record<string, ("boolean" \| "equals" \| "contains" \| "matches" \| "email" \| "url" \| "ip" \| "alpha" \| "numeric" \| "alphaNumeric" \| "base64" \| "hexadecimal" \| "hexcolor" \| "lowercase" \| ... 20 more ... \| ...)[]\> \| [...]; })[]\> \| [*Record*<string, (*boolean* \| *equals* \| *contains* \| *matches* \| *email* \| *url* \| *ip* \| *alpha* \| *numeric* \| *alphaNumeric* \| *base64* \| *hexadecimal* \| *hexcolor* \| *lowercase* \| *uppercase* \| *int* \| *float* \| *divisibleBy* \| *required* \| *minLength* \| *maxLength* \| *date* \| *afterDate* \| *beforeDate* \| *in* \| *creditCard* \| *json* \| *ascii* \| *locale* \| *currency* \| *mongooseId* \| *minValue* \| *maxValue* \| IObjectRuleType \| { rule: Record<string, ("boolean" \| "equals" \| "contains" \| "matches" \| "email" \| "url" \| "ip" \| "alpha" \| "numeric" \| "alphaNumeric" \| "base64" \| "hexadecimal" \| "hexcolor" \| "lowercase" \| ... 20 more ... \| ...)[]\> \| [...]; })[]\>]  })[]\> |

**Returns:** *boolean*

Defined in: [validate_with_error.ts:4](https://github.com/eduinlight/input-validator/blob/2de5682/src/validate_with_error.ts#L4)
