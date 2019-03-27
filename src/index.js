import {devanagari} from './devanagari'
import {khmer} from './khmer'
import {lao} from './lao'
import {myanmar} from './myanmar'
import {telugu} from './telugu'
import {thai} from './thai'
import {tibetan} from './tibetan'
import {countryFlag, keyCap, emojiVariation} from './emoji'

const patterns = [
  countryFlag, keyCap, emojiVariation,
  devanagari, khmer, lao, myanmar, telugu, thai, tibetan,
  '.'
]

const splitter = new RegExp(`(${patterns.join('|')})`, 'gu')

function splitGraphemes (str) {
  return str.match(splitter) || []
}

module.exports = {splitGraphemes}
