const isUrl = (str: string) => {
  return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%+.~#()?&//=]*)/.test(str)
}

export default isUrl
