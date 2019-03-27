// spec: https://www.unicode.org/charts/PDF/U0B80.pdf

const letter = '[\\u{0B80}-\\u{0BFF}]'
const trailingLetter = '[\\u{0B82}-\\u{0B83}\\u{0BBE}-\\u{0BD7}\\u{0962}\\u{0963}]'
// tamil's virama does not combine the following consonant
export const tamil = `${letter}${trailingLetter}*`
