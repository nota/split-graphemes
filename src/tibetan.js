// spec: https://www.unicode.org/charts/PDF/U0F00.pdf

const letter = '[\\u{0F00}-\\u{0FFF}]'
const trailingLetter = '[\\0F35\\0F37\\0F39\\0F3E\\0F3F\\u{0F71}-\\u{0F87}\\u{0F8D}-\\u{0FBC}\\u{0FC6}]'
export const tibetan = `${letter}${trailingLetter}*`
