import cont from 'validator/lib/contains'

export const contains = (str: string, seed: any) => {
  return cont(str, seed)
}
