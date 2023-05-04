import { DataType, IValidationResponse, SchemaType, ValidateOptions } from './types'
import { validate } from './validate'

export const validateAsync = (form: DataType, schema: SchemaType, options?: ValidateOptions): Promise<IValidationResponse> => {
  return new Promise((resolve, reject) => {
    const valid = validate(form, schema, options)
    if (valid.valid) {
      resolve(valid)
    } else {
      reject(valid.errors)
    }
  })
}
