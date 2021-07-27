/* eslint-env mocha */

import { assert } from 'chai'
import { splitGraphemes } from '../'

function testBreak (source, results) {
  const res = splitGraphemes(source)
  assert.deepEqual(res, results)
}

describe('WordBreak', function () {
  it('break correctly', function () {
    testBreak('✌🏽Hello 🌏✌️', ['✌🏽', 'H', 'e', 'l', 'l', 'o', ' ', '🌏', '✌️'])
    testBreak('more and ច្រើនឡើងៗ!มีความสุข',
      ['m', 'o', 'r', 'e', ' ', 'a', 'n', 'd', ' ', 'ច្រើ', 'ន', 'ឡើ', 'ង', 'ៗ', '!', 'มี', 'ค', 'ว', 'า', 'ม', 'สุ', 'ข'])
    testBreak('[អ៊ីនធឺណិត] [* អ៊ីនធឺណិត]',
      ['[', 'អ៊ី', 'ន', 'ធឺ', 'ណិ', 'ត', ']', ' ', '[', '*', ' ', 'អ៊ី', 'ន', 'ធឺ', 'ណិ', 'ត', ']'])
  })

  it('break arabic', function () {
    testBreak('نِيپُّونْ', [
      'نِ',
      'ي',
      'پُّ',
      'و',
      'نْ'
    ])
  })

  it('break hebrew', function () {
    testBreak('יִשְׂרָאֵל', [
      'יִ',
      'שְׂ',
      'רָ',
      'אֵ',
      'ל'
    ])
  })
})
