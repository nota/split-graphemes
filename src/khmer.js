// spec: https://www.unicode.org/charts/PDF/U1780.pdf

const letter = '[\\u{1780}-\\u{17FF}]'
const trailingLetter = '[\\u{17B6}-\\u{17D1}\\u{17D3}\\u{17DD}]'
const control = '\\u{17D2}'
export const khmer = `${letter}(${control}${letter}|${trailingLetter})*`
