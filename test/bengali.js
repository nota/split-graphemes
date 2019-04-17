/* eslint-env mocha */

import { bengali } from '../lib/bengali'
import { testBreak } from './helper'

describe('WordBreakBengali', function () {
  it('break correctly', function () {
    const regExp = new RegExp(bengali, 'gu')
    testBreak(regExp, 'দ্ধ', ['দ্ধ'])
    testBreak(regExp, 'স্ত্র', ['স্ত্র'])
    testBreak(regExp, 'নমস্কার', ['ন', 'ম', 'স্কা', 'র'])
  })
})
