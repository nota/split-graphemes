// spec: https://www.unicode.org/charts/PDF/U0C00.pdf

const letter = '[\\u{0C00}-\\u{0C7F}]'
const trailingLetter = '[\\u{0C00}-\\u{0C04}\\u{0C3E}-\\u{0C56}\\u{0C62}\\u{0C63}]'
const control = '\\u{0C4D}' // Virama
export const telugu = `${letter}(${control}${letter}|${trailingLetter})*`
