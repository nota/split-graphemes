// spec
// Hiragana https://www.unicode.org/charts/PDF/U3040.pdf
// Katakana https://www.unicode.org/charts/PDF/U30A0.pdf

const hiragana = '[\\u{3041}-\\u{3096}\\u{309D}-\\u{309F}]'
const katakana = '[\\u{30A0}-\\u{30FF}]'
const halfSizeSoundMark = '[\\u{3099}-\\u{309A}]' // soundmark NFD
const fullSizeSoundMark = '[\\u{309B}-\\u{309C}]'

export const japaneseKana = `((${katakana}|${hiragana})${halfSizeSoundMark}?|${fullSizeSoundMark})`
