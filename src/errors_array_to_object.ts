import { IValidationResponse } from './types'

const errorsArrayToObject = (errors: IValidationResponse['errors']): Record<string, string> => {
  return errors.reduce((acc, act) => ({ ...acc, [act.field]: act.error }), {})
}

export default errorsArrayToObject
