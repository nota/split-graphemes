/* eslint-env mocha */

import {tibetan} from '../src/tibetan'
import {testBreak} from './helper'

describe('WordBreakTibetan', function () {
  it('break correctly', function () {
    const regExp = new RegExp(tibetan, 'gu')
    testBreak(regExp, 'བསྟན་འཛིན་རྒྱ་མཚོ།', ['བ', 'སྟ', 'ན', '་', 'འ', 'ཛི', 'ན', '་', 'རྒྱ', '་', 'མ', 'ཚོ', '།'])
  })
})
