import { IValidationResponse } from './types'

const errorsArrayToObject = (errors: IValidationResponse['errors']) => {
  return errors.reduce((acc, act) => ({ ...acc, [act.field]: act.error }), {})
}

export default errorsArrayToObject
