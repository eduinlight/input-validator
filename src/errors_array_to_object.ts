import { IValidationResponse } from './types'

export const errorsArrayToObject = (errors: IValidationResponse['errors']): Record<string, string> => {
  return errors.reduce((acc, curr) => ({
    ...acc,
    [curr.field]: Array.isArray(curr.error)
      ? { ...errorsArrayToObject(curr.error) }
      : curr.error
  }), {})
}
