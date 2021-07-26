// Hebrew
//  https://www.unicode.org/charts/PDF/U0590.pdf
//  https://unicode-table.com/blocks/hebrew/

const letter = '[\u05D0-\u05EA]'
const combiningMark = '[\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7]'

export const hebrew = `${letter}${combiningMark}*`
