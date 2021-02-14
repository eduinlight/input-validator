import eq from 'validator/lib/equals'

const equals = (str: string, to: string) => {
  return eq(str, to)
}

export default equals
