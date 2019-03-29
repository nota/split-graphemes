/* eslint-env mocha */

import { myanmar } from '../src/myanmar'
import { testBreak } from './helper'

describe('WordBreakMyanmar', function () {
  it('break correctly', function () {
    const regExp = new RegExp(myanmar, 'gu')
    testBreak(regExp, 'နံနက်', ['နံ', 'န', 'က်'])
    testBreak(regExp, 'မင်္ဂလာနံနက်ခင်းပါ', ['မ', 'င်္ဂ', 'လာ', 'နံ', 'န', 'က်', 'ခ', 'င်း', 'ပါ'])
  })
})
