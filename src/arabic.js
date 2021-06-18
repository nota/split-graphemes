// spec
// https://www.unicode.org/charts/PDF/U0600.pdf done
// https://www.unicode.org/charts/PDF/U0750.pdf
// https://www.unicode.org/charts/PDF/UFB00.pdf
// https://www.unicode.org/charts/PDF/UFB50.pdf
// https://www.unicode.org/charts/PDF/UFE70.pdf

const letter = '[\\u{0620}-\\u{064A}\\u{066E}-\\u{066F}\\u{0671}-\\u{06D5}\\u{06EE}-\\u{06EF}\\u{06FA}-\\u{06FF}]'
const combiningMark = '[\\u{064B}-\\u{065F}\\u{0670}]'

export const arabic = `${letter}${combiningMark}?`
