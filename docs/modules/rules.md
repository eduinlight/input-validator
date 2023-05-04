[@eduinlight/input-validator](../README.md) / [Exports](../modules.md) / rules

# Namespace: rules

## Table of contents

### Functions

- [afterDate](rules.md#afterdate)
- [alpha](rules.md#alpha)
- [alphaNumeric](rules.md#alphanumeric)
- [ascii](rules.md#ascii)
- [base64](rules.md#base64)
- [beforeDate](rules.md#beforedate)
- [boolean](rules.md#boolean)
- [contains](rules.md#contains)
- [creditCard](rules.md#creditcard)
- [currency](rules.md#currency)
- [date](rules.md#date)
- [divisibleBy](rules.md#divisibleby)
- [email](rules.md#email)
- [equals](rules.md#equals)
- [float](rules.md#float)
- [hexadecimal](rules.md#hexadecimal)
- [hexcolor](rules.md#hexcolor)
- [in](rules.md#in)
- [int](rules.md#int)
- [ip](rules.md#ip)
- [json](rules.md#json)
- [locale](rules.md#locale)
- [lowercase](rules.md#lowercase)
- [matches](rules.md#matches)
- [maxLength](rules.md#maxlength)
- [maxValue](rules.md#maxvalue)
- [minLength](rules.md#minlength)
- [minValue](rules.md#minvalue)
- [mongooseId](rules.md#mongooseid)
- [numeric](rules.md#numeric)
- [required](rules.md#required)
- [uppercase](rules.md#uppercase)
- [url](rules.md#url)

## Functions

### afterDate

▸ **afterDate**(`str`, `date`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `date` | `string` |

#### Returns

`boolean`

#### Defined in

[rules/is_after_date.ts:3](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/is_after_date.ts#L3)

___

### alpha

▸ **alpha**(`str`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`boolean`

#### Defined in

[rules/is_alpha.ts:3](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/is_alpha.ts#L3)

___

### alphaNumeric

▸ **alphaNumeric**(`str`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`boolean`

#### Defined in

[rules/is_alpha_numeric.ts:3](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/is_alpha_numeric.ts#L3)

___

### ascii

▸ **ascii**(`str`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`boolean`

#### Defined in

[rules/is_ascii.ts:3](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/is_ascii.ts#L3)

___

### base64

▸ **base64**(`str`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`boolean`

#### Defined in

[rules/is_base64.ts:3](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/is_base64.ts#L3)

___

### beforeDate

▸ **beforeDate**(`str`, `date`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `date` | `string` |

#### Returns

`boolean`

#### Defined in

[rules/is_before_date.ts:3](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/is_before_date.ts#L3)

___

### boolean

▸ **boolean**(`str`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`boolean`

#### Defined in

[rules/is_boolean.ts:3](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/is_boolean.ts#L3)

___

### contains

▸ **contains**(`str`, `seed`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `seed` | `any` |

#### Returns

`boolean`

#### Defined in

[rules/contains.ts:3](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/contains.ts#L3)

___

### creditCard

▸ **creditCard**(`str`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`boolean`

#### Defined in

[rules/is_credit_card.ts:3](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/is_credit_card.ts#L3)

___

### currency

▸ **currency**(`str`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`boolean`

#### Defined in

[rules/is_currency.ts:3](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/is_currency.ts#L3)

___

### date

▸ **date**(`str`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`boolean`

#### Defined in

[rules/is_date.ts:1](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/is_date.ts#L1)

___

### divisibleBy

▸ **divisibleBy**(`str`, `value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `value` | `number` |

#### Returns

`boolean`

#### Defined in

[rules/is_divisible_by.ts:3](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/is_divisible_by.ts#L3)

___

### email

▸ **email**(`str`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`boolean`

#### Defined in

[rules/is_email.ts:3](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/is_email.ts#L3)

___

### equals

▸ **equals**(`str`, `to`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `to` | `string` |

#### Returns

`boolean`

#### Defined in

[rules/equals.ts:3](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/equals.ts#L3)

___

### float

▸ **float**(`str`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`boolean`

#### Defined in

[rules/is_float.ts:3](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/is_float.ts#L3)

___

### hexadecimal

▸ **hexadecimal**(`str`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`boolean`

#### Defined in

[rules/is_hexadecimal.ts:3](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/is_hexadecimal.ts#L3)

___

### hexcolor

▸ **hexcolor**(`str`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`boolean`

#### Defined in

[rules/is_hexcolor.ts:3](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/is_hexcolor.ts#L3)

___

### in

▸ **in**(`str`, `values`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `values` | `any`[] |

#### Returns

`boolean`

#### Defined in

[rules/is_in.ts:3](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/is_in.ts#L3)

___

### int

▸ **int**(`str`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`boolean`

#### Defined in

[rules/is_int.ts:3](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/is_int.ts#L3)

___

### ip

▸ **ip**(`str`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`boolean`

#### Defined in

[rules/is_ip.ts:3](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/is_ip.ts#L3)

___

### json

▸ **json**(`str`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`boolean`

#### Defined in

[rules/is_json.ts:3](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/is_json.ts#L3)

___

### locale

▸ **locale**(`str`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`boolean`

#### Defined in

[rules/is_locale.ts:3](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/is_locale.ts#L3)

___

### lowercase

▸ **lowercase**(`str`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`boolean`

#### Defined in

[rules/is_lowercase.ts:3](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/is_lowercase.ts#L3)

___

### matches

▸ **matches**(`str`, `regexp`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `regexp` | `RegExp` |

#### Returns

`boolean`

#### Defined in

[rules/matches.ts:1](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/matches.ts#L1)

___

### maxLength

▸ **maxLength**(`str`, `value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `value` | `number` |

#### Returns

`boolean`

#### Defined in

[rules/is_max_length.ts:1](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/is_max_length.ts#L1)

___

### maxValue

▸ **maxValue**(`str`, `value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `value` | `number` |

#### Returns

`boolean`

#### Defined in

[rules/max_value.ts:1](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/max_value.ts#L1)

___

### minLength

▸ **minLength**(`str`, `value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `value` | `number` |

#### Returns

`boolean`

#### Defined in

[rules/is_min_length.ts:1](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/is_min_length.ts#L1)

___

### minValue

▸ **minValue**(`str`, `value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `value` | `number` |

#### Returns

`boolean`

#### Defined in

[rules/min_value.ts:1](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/min_value.ts#L1)

___

### mongooseId

▸ **mongooseId**(`str`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`boolean`

#### Defined in

[rules/is_mongoose_id.ts:1](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/is_mongoose_id.ts#L1)

___

### numeric

▸ **numeric**(`str`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`boolean`

#### Defined in

[rules/is_numeric.ts:3](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/is_numeric.ts#L3)

___

### required

▸ **required**(`str`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`boolean`

#### Defined in

[rules/is_required.ts:1](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/is_required.ts#L1)

___

### uppercase

▸ **uppercase**(`str`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`boolean`

#### Defined in

[rules/is_uppercase.ts:3](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/is_uppercase.ts#L3)

___

### url

▸ **url**(`str`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`boolean`

#### Defined in

[rules/is_url.ts:3](https://github.com/eduinlight/input-validator/blob/0a2c38c/src/rules/is_url.ts#L3)
