// spec: https://unicode.org/charts/PDF/U0D00.pdf

const letter = '[\\u{0D00}-\\u{0D7F}]'
const trailingLetter = '[\\u{0D00}-\\u{0D03}\\u{0D3B}\\u{0D3C}\\u{0D3E}-\\u{0D4D}\\u{0D57}\\u{0D62}-\\u{0D63}]'
const control = '\\u{0D4D}' // Virama
export const malayalam = `${letter}(${control}${letter}|${trailingLetter})*`
