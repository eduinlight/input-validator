import eq from 'validator/lib/equals'

export const equals = (str: string, to: string) => {
  return eq(str, to)
}
