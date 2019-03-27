/* eslint-env mocha */

import {devanagari} from '../src/devanagari'
import {testBreak} from './helper'

describe('WordBreakDevanagari', function () {
  it('break correctly', function () {
    const regExp = new RegExp(devanagari, 'gu')
    testBreak(regExp, 'वाह', ['वा', 'ह'])
    testBreak(regExp, 'शुभ', ['शु', 'भ'])
    testBreak(regExp, 'रात्रि', ['रा', 'त्रि'])
  })
})
