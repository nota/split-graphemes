/* eslint-env mocha */

import { emojiVariation, keyCap, countryFlag } from '../lib/emoji'
import { testBreak } from './helper'

describe('WordBreakEmoji', function () {
  it('break correctly keyCap', function () {
    const regExp = new RegExp(keyCap, 'gu')
    testBreak(regExp, '8️⃣9️⃣', ['8️⃣', '9️⃣'])
    testBreak(regExp, '#️⃣*️⃣', ['#️⃣', '*️⃣'])
  })

  it('break correctly countryFlag', function () {
    const regExp = new RegExp(countryFlag, 'gu')
    testBreak(regExp, '🇯🇵🇨🇦', ['🇯🇵', '🇨🇦'])
  })

  describe('break correctly emojiVariation', function () {
    const regExp = new RegExp(emojiVariation, 'gu')

    // https://lets-emoji.com/emojilist/
    it('smile', function () {
      testBreak(regExp, '😀', ['😀'])
    })

    it('skin-tone', function () {
      testBreak(regExp, '🤛', ['🤛'])
      testBreak(regExp, '👧🏽', ['👧🏽'])
    })

    it('family', function () {
      testBreak(regExp, '👨‍👩‍👦‍👦', ['👨‍👩‍👦‍👦'])
    })

    it('person-role', function () {
      testBreak(regExp, '👨‍🏫', ['👨‍🏫'])
      testBreak(regExp, '👩🏾‍⚖️', ['👩🏾‍⚖️'])
      testBreak(regExp, '👩🏾‍✈️', ['👩🏾‍✈️'])
    })

    it('person-fantasy', function () {
      testBreak(regExp, '👼', ['👼'])
      testBreak(regExp, '👼🏽', ['👼🏽'])
    })

    it('flag', function () {
      testBreak(regExp, '🏳️‍🌈', ['🏳️‍🌈'])
      testBreak(regExp, '🏴‍☠️', ['🏴‍☠️'])
    })

    it('variation selector', function () {
      // u260E uFE0E
      testBreak(regExp, '☎', ['☎'])
      // u260E uFE0F
      testBreak(regExp, '☎️', ['☎️'])
    })

    it('multiple of emojis', function () {
      testBreak(regExp, '👨‍👩‍👦‍👦👨‍👩‍👧', ['👨‍👩‍👦‍👦', '👨‍👩‍👧'])
      testBreak(regExp, '☎☎️', ['☎', '☎️'])
      testBreak(regExp, '🤜🏾🤘🏾', ['🤜🏾', '🤘🏾'])
    })

    it('enclosed cjk letters and months', function () {
      // u3297 uFE0F
      testBreak(regExp, '㊗️', ['㊗️'])
      // u3299 uFE0F
      testBreak(regExp, '㊙️', ['㊙️'])
    })

    it('enclosed ideographic supplement', function () {
      // u1F202 uFE0F
      testBreak(regExp, '🈂️', ['🈂️'])
      // u1F21A uFE0F
      testBreak(regExp, '🈚️', ['🈚️'])
      // u1F22F uFE0F
      testBreak(regExp, '🈯️', ['🈯️'])
      // u1F237 uFE0F
      testBreak(regExp, '🈷️', ['🈷️'])
    })
  })
})
