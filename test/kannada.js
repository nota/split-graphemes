/* eslint-env mocha */

import { kannada } from '../lib/kannada'
import { testBreak } from './helper'

describe('WordBreakKannada', function () {
  it('break correctly', function () {
    const regExp = new RegExp(kannada, 'gu')
    testBreak(regExp, 'ನಮಸ್ಕಾರ', ['ನ', 'ಮ', 'ಸ್ಕಾ', 'ರ'])
    testBreak(regExp, 'ನನ್ನ', ['ನ', 'ನ್ನ'])
  })
})
