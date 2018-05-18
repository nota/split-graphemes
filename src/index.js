import {khmer} from './khmer'

const patterns = [
  khmer,
  '.'
]

const splitter = new RegExp(`(${patterns.join('|')})`, 'gu')

export function splitGraphemes (str) {
  return str.match(splitter) || []
}
