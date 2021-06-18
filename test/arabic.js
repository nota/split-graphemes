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

    const note = 'نِيهُون'
    assert.lengthOf(note, 7)
    testBreak(regExp, note, [
      'نِ',
      'ي',
      'هُ',
      'و',
      'ن'
    ])
  })
})
