const isAlphaNumeric = (str: string) => {
  return /^[a-zA-Z0-9]*$/.test(str)
}

export default isAlphaNumeric
