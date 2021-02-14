const INF = 1e-9

const isDivisibleBy = (str: string, value: number) => {
  const floatResult = parseFloat(str) / value
  const intResult = parseInt(Math.round(floatResult).toString())
  return Math.abs(floatResult - intResult) <= INF
}

export default isDivisibleBy
