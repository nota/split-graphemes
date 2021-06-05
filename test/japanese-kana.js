/* eslint-env mocha */

import { japaneseKana } from '../lib/japanese-kana'
import { testBreak } from './helper'

describe('WordBreakJapaneseHiragana', function () {
  it('break correctly', function () {
    const regExp = new RegExp(japaneseKana, 'gu')
    testBreak(regExp, 'こんにちは', ['こ', 'ん', 'に', 'ち', 'は'])
    testBreak(regExp, 'ごん゙に゙ぢば', ['ご', 'ん゙', 'に゙', 'ぢ', 'ば'])
    testBreak(regExp, 'ハヒフヘホ', ['ハ', 'ヒ', 'フ', 'ヘ', 'ホ'])
    testBreak(regExp, 'パピプペポ', ['パ', 'ピ', 'プ', 'ペ', 'ポ'])
  })
})
