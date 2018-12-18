import {khmer} from './khmer'
import {lao} from './lao'
import {myanmar} from './myanmar'
import {thai} from './thai'
import {countryFlag, keyCap, emojiVariation} from './emoji'

const patterns = [
  countryFlag, keyCap, emojiVariation,
  khmer, thai, lao, myanmar,
  '.'
]

const splitter = new RegExp(`(${patterns.join('|')})`, 'gu')

function splitGraphemes (str) {
  return str.match(splitter) || []
}

module.exports = {splitGraphemes}
