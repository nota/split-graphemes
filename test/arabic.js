/* eslint-env mocha */

import { assert } from 'chai'
import { arabic } from '../lib/arabic'
import { testBreak } from './helper'

describe('WordBreakArabic', function () {
  const regExp = new RegExp(arabic, 'gu')

  it('breaks single letters', function () {
    const hello = 'مرحبا'
    assert.lengthOf(hello, 5)
    testBreak(regExp, hello, [
      'م',
      'ر',
      'ح',
      'ب',
      'ا'
    ])
  })

  it('breaks letter + combining mark', function () {
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

  it('breaks single letter + multiple combining marks', function () {
    const nippon = 'نِيپُّونْ'
    assert.lengthOf(nippon, 9)
    testBreak(regExp, nippon, [
      'نِ',
      'ي',
      'پُّ',
      'و',
      'نْ'
    ])
  })
})
