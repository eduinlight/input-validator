import currency from 'validator/lib/isCurrency'

export const isCurrency = (str: string) => {
  return currency(str)
}
