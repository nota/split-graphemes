// spec: https://www.unicode.org/charts/PDF/U0980.pdf

const letter = '[\\u{0980}-\\u{09FF}]'
const trailingLetter = '[\\u{0980}-\\u{0983}\\u{09BC}-\\u{09D7}\\u{09E2}\\u{09E3}\\u{09FE}]'
const control = '\\u{09CD}' // Virama
export const bengali = `${letter}(${control}${letter}|${trailingLetter})*`
