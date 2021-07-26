/* eslint-env mocha */

import { assert } from 'chai'
import { hebrew } from '../lib/hebrew'
import { testBreak } from './helper'

describe('WordBreakHebrew', function () {
  const regExp = new RegExp(hebrew, 'gu')

  it('breaks single letters', function () {
    const israel = 'ישראל'
    assert.lengthOf(israel, 5)
    testBreak(regExp, israel, [
      'י',
      'ש',
      'ר',
      'א',
      'ל'
    ])
  })
})
