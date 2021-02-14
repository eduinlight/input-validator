import currency from 'validator/lib/isCurrency'

const isCurrency = (str: string) => {
  return currency(str)
}

export default isCurrency
