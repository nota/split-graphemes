/* eslint-env mocha */

import { japaneseKana } from '../lib/japanese-kana'
import { testBreak } from './helper'

describe('WordBreakJapaneseHiragana', function () {
  const regExp = new RegExp(japaneseKana, 'gu')

  it('breaks plain kana', function () {
    testBreak(regExp, 'こんにちは', ['こ', 'ん', 'に', 'ち', 'は'])
    testBreak(regExp, 'ハヒフヘホ', ['ハ', 'ヒ', 'フ', 'ヘ', 'ホ'])
  })

  it('breaks kana with soundmark', function () {
    testBreak(regExp, 'ごん゙に゙ぢば', ['ご', 'ん゙', 'に゙', 'ぢ', 'ば'])
    testBreak(regExp, 'パピプペポ', ['パ', 'ピ', 'プ', 'ペ', 'ポ'])
  })
})
