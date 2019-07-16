// spec: https://www.unicode.org/charts/PDF/U0C80.pdf

const letter = '[\\u{0A80}-\\u{0AFF}]'
const trailingLetter = '[\\u{0A81}-\\u{0A83}\\u{0ABC}\\u{0ABE}-\\u{0ACD}\\u{0AE2}\\u{0AE3}\\u{0AFA}-\\u{0AFF}]'
const control = '\\u{0ACD}' // Virama
export const gujarati = `${letter}(${control}${letter}|${trailingLetter})*`
