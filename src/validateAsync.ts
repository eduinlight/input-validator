import { DataType, SchemaType, ValidateOptions } from './types'
import validate from './validate'

const validateAsync = (form: DataType, schema: SchemaType, options?: ValidateOptions): Promise<void> => {
  return new Promise((resolve, reject) => {
    const valid = validate(form, schema, options)
    if (valid.valid) {
      resolve()
    } else {
      reject(valid.errors)
    }
  })
}

export default validateAsync
