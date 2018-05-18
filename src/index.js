const patterns = [
  '.'
]

const splitter = new RegExp(`(${patterns.join('|')})`, 'gu')

export function splitGraphemes (str) {
  return str.match(splitter) || []
}
