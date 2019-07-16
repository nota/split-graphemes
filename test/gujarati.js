/* eslint-env mocha */

import { gujarati } from '../lib/gujarati'
import { testBreak } from './helper'

describe('WordBreakGujarati', function () {
  it('break correctly', function () {
    const regExp = new RegExp(gujarati, 'gu')
    testBreak(regExp, 'ગુજરાતી', ['ગુ', 'જ', 'રા', 'તી'])
  })
})
