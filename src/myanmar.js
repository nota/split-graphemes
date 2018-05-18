// spec: https://www.unicode.org/charts/PDF/U1000.pdf

const letter = '[\\u{1000}-\\u{109F}]'
const trailingLetterRange = [
  '\\u{102B}-\\u{1038}',
  '\\u{103A}-\\u{103E}',
  '\\u{1056}-\\u{1059}',
  '\\u{105E}-\\u{1060}',
  '\\u{1062}-\\u{1064}',
  '\\u{1067}-\\u{106D}',
  '\\u{1071}-\\u{1074}',
  '\\u{1082}-\\u{108D}',
  '\\u{108F}',
  '\\u{109A}-\\u{109D}'
]
const trailingLetter = `[${trailingLetterRange.join('')}]`
const control = '\\u{1039}'
export const myanmar = `${letter}(${control}${letter}|${trailingLetter})*`
