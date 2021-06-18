/* eslint-env mocha */

import { assert } from 'chai'
import { arabic } from '../lib/arabic'
import { testBreak } from './helper'

describe('WordBreakArabic', function () {
  it('break correctly', function () {
    const regExp = new RegExp(arabic, 'gu')

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
