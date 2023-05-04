[@eduinlight/input-validator](README.md) / Exports

# @eduinlight/input-validator

## Table of contents

### References

- [afterDate](modules.md#afterdate)
- [alpha](modules.md#alpha)
- [alphaNumeric](modules.md#alphanumeric)
- [ascii](modules.md#ascii)
- [base64](modules.md#base64)
- [beforeDate](modules.md#beforedate)
- [boolean](modules.md#boolean)
- [contains](modules.md#contains)
- [creditCard](modules.md#creditcard)
- [currency](modules.md#currency)
- [date](modules.md#date)
- [divisibleBy](modules.md#divisibleby)
- [email](modules.md#email)
- [equals](modules.md#equals)
- [float](modules.md#float)
- [hexadecimal](modules.md#hexadecimal)
- [hexcolor](modules.md#hexcolor)
- [in](modules.md#in)
- [int](modules.md#int)
- [ip](modules.md#ip)
- [json](modules.md#json)
- [locale](modules.md#locale)
- [lowercase](modules.md#lowercase)
- [matches](modules.md#matches)
- [maxLength](modules.md#maxlength)
- [maxValue](modules.md#maxvalue)
- [minLength](modules.md#minlength)
- [minValue](modules.md#minvalue)
- [mongooseId](modules.md#mongooseid)
- [numeric](modules.md#numeric)
- [required](modules.md#required)
- [uppercase](modules.md#uppercase)
- [url](modules.md#url)

### Namespaces

- [locales](modules/locales.md)
- [rules](modules/rules.md)

### Classes

- [FieldError](classes/FieldError.md)

### Type Aliases

- [SchemaType](modules.md#schematype)

### Variables

- [defaults](modules.md#defaults)

### Functions

- [errorsArrayToObject](modules.md#errorsarraytoobject)
- [extendRules](modules.md#extendrules)
- [getMessage](modules.md#getmessage)
- [setLocale](modules.md#setlocale)
- [setMessages](modules.md#setmessages)
- [validate](modules.md#validate)
- [validateAsync](modules.md#validateasync)
- [validateWithError](modules.md#validatewitherror)

## References

### afterDate

Re-exports [afterDate](modules/rules.md#afterdate)

___

### alpha

Re-exports [alpha](modules/rules.md#alpha)

___

### alphaNumeric

Re-exports [alphaNumeric](modules/rules.md#alphanumeric)

___

### ascii

Re-exports [ascii](modules/rules.md#ascii)

___

### base64

Re-exports [base64](modules/rules.md#base64)

___

### beforeDate

Re-exports [beforeDate](modules/rules.md#beforedate)

___

### boolean

Re-exports [boolean](modules/rules.md#boolean)

___

### contains

Re-exports [contains](modules/rules.md#contains)

___

### creditCard

Re-exports [creditCard](modules/rules.md#creditcard)

___

### currency

Re-exports [currency](modules/rules.md#currency)

___

### date

Re-exports [date](modules/rules.md#date)

___

### divisibleBy

Re-exports [divisibleBy](modules/rules.md#divisibleby)

___

### email

Re-exports [email](modules/rules.md#email)

___

### equals

Re-exports [equals](modules/rules.md#equals)

___

### float

Re-exports [float](modules/rules.md#float)

___

### hexadecimal

Re-exports [hexadecimal](modules/rules.md#hexadecimal)

___

### hexcolor

Re-exports [hexcolor](modules/rules.md#hexcolor)

___

### in

Re-exports [in](modules/rules.md#in)

___

### int

Re-exports [int](modules/rules.md#int)

___

### ip

Re-exports [ip](modules/rules.md#ip)

___

### json

Re-exports [json](modules/rules.md#json)

___

### locale

Re-exports [locale](modules/rules.md#locale)

___

### lowercase

Re-exports [lowercase](modules/rules.md#lowercase)

___

### matches

Re-exports [matches](modules/rules.md#matches)

___

### maxLength

Re-exports [maxLength](modules/rules.md#maxlength)

___

### maxValue

Re-exports [maxValue](modules/rules.md#maxvalue)

___

### minLength

Re-exports [minLength](modules/rules.md#minlength)

___

### minValue

Re-exports [minValue](modules/rules.md#minvalue)

___

### mongooseId

Re-exports [mongooseId](modules/rules.md#mongooseid)

___

### numeric

Re-exports [numeric](modules/rules.md#numeric)

___

### required

Re-exports [required](modules/rules.md#required)

___

### uppercase

Re-exports [uppercase](modules/rules.md#uppercase)

___

### url

Re-exports [url](modules/rules.md#url)

## Type Aliases

### SchemaType

Ƭ **SchemaType**: `Record`<`string`, (`RuleType` \| `IObjectRuleType` \| { `rule`: [`SchemaType`](modules.md#schematype) \| [[`SchemaType`](modules.md#schematype)]  })[]\>

#### Defined in

[types.ts:20](https://github.com/eduinlight/input-validator/blob/cfaf6b2/src/types.ts#L20)

## Variables

### defaults

• `Const` **defaults**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `locale` | ``"enUS"`` \| ``"esES"`` |
| `messages` | [`locales`](modules/locales.md) |
| `rules` | [`rules`](modules/rules.md) |

#### Defined in

[defaults.ts:5](https://github.com/eduinlight/input-validator/blob/cfaf6b2/src/defaults.ts#L5)

## Functions

### errorsArrayToObject

▸ **errorsArrayToObject**(`errors`): `Record`<`string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `errors` | [`FieldError`](classes/FieldError.md)[] |

#### Returns

`Record`<`string`, `string`\>

#### Defined in

[errors_array_to_object.ts:3](https://github.com/eduinlight/input-validator/blob/cfaf6b2/src/errors_array_to_object.ts#L3)

___

### extendRules

▸ **extendRules**(`rules`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rules` | `Record`<`string`, `RuleFunctionType`\> |

#### Returns

`void`

#### Defined in

[defaults.ts:13](https://github.com/eduinlight/input-validator/blob/cfaf6b2/src/defaults.ts#L13)

___

### getMessage

▸ **getMessage**(`rule`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rule` | ``"boolean"`` \| ``"afterDate"`` \| ``"alpha"`` \| ``"alphaNumeric"`` \| ``"ascii"`` \| ``"base64"`` \| ``"beforeDate"`` \| ``"creditCard"`` \| ``"currency"`` \| ``"date"`` \| ``"divisibleBy"`` \| ``"email"`` \| ``"float"`` \| ``"hexadecimal"`` \| ``"hexcolor"`` \| ``"in"`` \| ``"int"`` \| ``"ip"`` \| ``"json"`` \| ``"locale"`` \| ``"lowercase"`` \| ``"maxLength"`` \| ``"minLength"`` \| ``"mongooseId"`` \| ``"numeric"`` \| ``"required"`` \| ``"uppercase"`` \| ``"url"`` \| ``"matches"`` \| ``"minValue"`` \| ``"maxValue"`` \| ``"contains"`` \| ``"equals"`` |

#### Returns

`string`

#### Defined in

[defaults.ts:11](https://github.com/eduinlight/input-validator/blob/cfaf6b2/src/defaults.ts#L11)

___

### setLocale

▸ **setLocale**(`locale`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | ``"enUS"`` \| ``"esES"`` |

#### Returns

`void`

#### Defined in

[defaults.ts:21](https://github.com/eduinlight/input-validator/blob/cfaf6b2/src/defaults.ts#L21)

___

### setMessages

▸ **setMessages**(`locale`, `messages`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `locale` | ``"enUS"`` \| ``"esES"`` |
| `messages` | `LocaleType` |

#### Returns

`void`

#### Defined in

[defaults.ts:17](https://github.com/eduinlight/input-validator/blob/cfaf6b2/src/defaults.ts#L17)

___

### validate

▸ **validate**(`form`, `schema`, `options?`): `IValidationResponse`

Returns the average of two numbers.

**`Remarks`**

This method is part of the core-library#Statistics | Statistics subsystem.

#### Parameters

| Name | Type |
| :------ | :------ |
| `form` | `DataType` |
| `schema` | [`SchemaType`](modules.md#schematype) |
| `options?` | `ValidateOptions` |

#### Returns

`IValidationResponse`

The arithmetic mean of `x` and `y`

#### Defined in

[validate.ts:63](https://github.com/eduinlight/input-validator/blob/cfaf6b2/src/validate.ts#L63)

___

### validateAsync

▸ **validateAsync**(`form`, `schema`, `options?`): `Promise`<`IValidationResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `form` | `DataType` |
| `schema` | [`SchemaType`](modules.md#schematype) |
| `options?` | `ValidateOptions` |

#### Returns

`Promise`<`IValidationResponse`\>

#### Defined in

[validateAsync.ts:4](https://github.com/eduinlight/input-validator/blob/cfaf6b2/src/validateAsync.ts#L4)

___

### validateWithError

▸ **validateWithError**(`form`, `schema`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `form` | `DataType` |
| `schema` | [`SchemaType`](modules.md#schematype) |

#### Returns

`boolean`

#### Defined in

[validate_with_error.ts:4](https://github.com/eduinlight/input-validator/blob/cfaf6b2/src/validate_with_error.ts#L4)
