import inf from 'validator/lib/isIn'

export const isIn = (str: string, values: any[]) => {
  return inf(str, values)
}
