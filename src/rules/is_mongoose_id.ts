export const isMongooseId = (str: string) => {
  return /^[a-fA-F0-9]{24}$/.test(str)
}
