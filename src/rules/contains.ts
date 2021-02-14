import cont from 'validator/lib/contains'

const contains = (str: string, seed: any) => {
  return cont(str, seed)
}

export default contains
