import creditCard from 'validator/lib/isCreditCard'

export const isCreditCard = (str: string) => {
  return creditCard(str)
}
