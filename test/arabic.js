/* eslint-env mocha */

import { assert } from 'chai'
import { arabic } from '../lib/arabic'
import { testBreak } from './helper'

describe('WordBreakArabic', function () {
  it('break correctly', function () {
    const regExp = new RegExp(arabic, 'gu')

    const hello = 'مرحبا'
    assert.lengthOf(hello, 5)
    testBreak(regExp, hello, [
      'م',
      'ر',
      'ح',
      'ب',
      'ا'
    ])

    const japan = 'نِيهُون'
    assert.lengthOf(japan, 7)
    testBreak(regExp, japan, [
      'نِ',
      'ي',
      'هُ',
      'و',
      'ن'
    ])
  })
})
