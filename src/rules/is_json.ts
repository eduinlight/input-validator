import json from 'validator/lib/isJSON'

const isJson = (str: string) => {
  return json(str)
}

export default isJson
