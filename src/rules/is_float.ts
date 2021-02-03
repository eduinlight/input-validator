const isFloat = (str: string) => {
  return /^[+-]?\d*(\.\d+)?$/.test(str)
}

export default isFloat
