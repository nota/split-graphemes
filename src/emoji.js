// spec:
//   https://en.wikipedia.org/wiki/Unicode_block

export const countryFlag = '[\\u{1F1E6}-\\u{1F1FF}]{2}'

export const keyCap = '[0-9#\\*][\\u{FE0F}]?\\u{20E3}'

const emojiRange = [
  '[\\u{2600}-\\u{26FF}]', // Miscellaneous Symbols
  '[\\u{2700}-\\u{27BF}]', // Dingbats
  '[\\u{1F300}-\\u{1F5FF}]', // Miscellaneous Symbols and Pictographs
  '[\\u{1F600}-\\u{1F64F}]', // Emoticons
  '[\\u{1F680}-\\u{1F6FF}]', // Transport and Map Symbols
  '[\\u{1F700}-\\u{1F77F}]', // Alchemical Symbols
  '[\\u{1F900}-\\u{1F9FF}]' // Supplemental Symbols and Pictographs
]
const emoji = `(${emojiRange.join('|')})`
const zeroWidthJoinder = '\\u{200D}'
const variationSeletor = '[\\u{FE0E}\\u{FE0F}]'
const skinTone = '[\\u{1F3FB}-\\u{1F3FF}]'

export const emojiVariation = `${emoji}(${zeroWidthJoinder}${emoji}|${skinTone}|${variationSeletor})*`
