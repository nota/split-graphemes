// spec: https://www.unicode.org/charts/PDF/U0E80.pdf

const letter = '[\\u{0E80}-\\u{0EFF}]'
const trailingLetter = '[\\u{0EB1}\\u{0EB4}-\\u{0EBC}\\u{0EC8}-\\u{0ECD}]'
export const lao = `${letter}${trailingLetter}*`
