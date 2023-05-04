import json from 'validator/lib/isJSON'

export const isJson = (str: string) => {
  return json(str)
}
