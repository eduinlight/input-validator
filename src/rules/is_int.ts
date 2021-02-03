const isInt = (str: string) => {
  return /^[+-]?\d+$/.test(str)
}

export default isInt
