// spec
// https://www.unicode.org/charts/PDF/U0600.pdf
// https://www.unicode.org/charts/PDF/U0750.pdf

const arabicLetter = '\u0620-\u064A\u066E-\u066F\u0671-\u06D5\u06EE-\u06EF\u06FA-\u06FF'
const arabicSupplementLetter = '\u0750-\u077F'

const letter = `[${arabicLetter}${arabicSupplementLetter}]`
const combiningMark = '[\u064B-\u065F\u0670]'

export const arabic = `${letter}${combiningMark}?`
