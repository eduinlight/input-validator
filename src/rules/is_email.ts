const isEmail = (str: string) => {
  const isCommon = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/.test(str)
  const isUncommon = /^([a-z0-9.+-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/.test(str)
  return isCommon || isUncommon
}

export default isEmail
