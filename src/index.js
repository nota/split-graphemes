import { arabic } from './arabic'
import { bengali } from './bengali'
import { devanagari } from './devanagari'
import { gujarati } from './gujarati'
import { hebrew } from './hebrew'
import { japaneseKana } from './japanese-kana'
import { kannada } from './kannada'
import { khmer } from './khmer'
import { lao } from './lao'
import { malayalam } from './malayalam'
import { myanmar } from './myanmar'
import { tamil } from './tamil'
import { telugu } from './telugu'
import { thai } from './thai'
import { tibetan } from './tibetan'
import { countryFlag, keyCap, emojiVariation } from './emoji'

const patterns = [
  countryFlag, keyCap, emojiVariation,
  arabic,
  bengali, devanagari, gujarati, hebrew,
  japaneseKana,
  kannada, khmer, lao, malayalam, myanmar,
  tamil, telugu, thai, tibetan,
  '.'
]

const splitter = new RegExp(`(${patterns.join('|')})`, 'gu')

function splitGraphemes (str) {
  return str.match(splitter) || []
}

module.exports = { splitGraphemes }
