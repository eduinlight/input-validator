import { DataType, InputError, SchemaType } from './types'
import { validate } from './validate'

export const validateWithError = (form: DataType, schema: SchemaType): boolean => {
  const validationResponse = validate(form, schema)

  if (!validationResponse.valid) {
    throw new InputError(validationResponse.errors)
  }

  return true
}
