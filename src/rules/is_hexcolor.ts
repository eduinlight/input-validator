import hexcolor from 'validator/lib/isHexColor'

const isHexcolor = (str: string) => {
  return hexcolor(str)
}

export default isHexcolor
