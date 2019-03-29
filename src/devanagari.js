// spec: https://www.unicode.org/charts/PDF/U0900.pdf

const letter = '[\\u{0900}-\\u{097F}]'
const trailingLetter = '[\\u{0900}-\\u{0903}\\u{093A}-\\u{0957}\\u{0962}\\u{0963}]'
const control = '\\u{094D}' // Virama
export const devanagari = `${letter}(${control}${letter}|${trailingLetter})*`
