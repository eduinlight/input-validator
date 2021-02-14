import creditCard from 'validator/lib/isCreditCard'

const isCreditCard = (str: string) => {
  return creditCard(str)
}

export default isCreditCard
