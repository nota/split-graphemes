// spec: https://www.unicode.org/charts/PDF/U0E00.pdf

const letter = '[\\u0E00-\\u0E7F]'
const trailingLetter = '[\\u0E31\\u0E33-\\u0E3A\\u0E47-\\u0E4E]'
export const thai = `${letter}${trailingLetter}*`
