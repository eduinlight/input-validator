import hexcolor from 'validator/lib/isHexColor'

export const isHexcolor = (str: string) => {
  return hexcolor(str)
}
