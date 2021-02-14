import inf from 'validator/lib/isIn'

const isIn = (str: string, values: any[]) => {
  return inf(str, values)
}

export default isIn
