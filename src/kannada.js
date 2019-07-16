// spec: https://www.unicode.org/charts/PDF/U0C80.pdf

const letter = '[\\u{0C80}-\\u{0CFF}]'
const trailingLetter = '[\\u{0C81}-\\u{0C83}\\u{0CBC}\\u{0CBE}-\\u{0CCC}\\u{0CD5}\\u{0CD6}\\u{0CE2}\\u{0CE3}]'
const control = '\\u{0CCD}' // Virama
export const kannada = `${letter}(${control}${letter}|${trailingLetter})*`
