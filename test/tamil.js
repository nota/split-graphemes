/* eslint-env mocha */

import {tamil} from '../src/tamil'
import {testBreak} from './helper'

describe('WordBreakTamil', function () {
  it('break correctly', function () {
    const regExp = new RegExp(tamil, 'gu')
    testBreak(regExp, 'ஹலோ', ['ஹ', 'லோ'])
    testBreak(regExp, 'குடீவ்னிங்', ['கு', 'டீ', 'வ்', 'னி', 'ங்'])
    testBreak(regExp, 'ஓக்கே', ['ஓ', 'க்', 'கே'])
  })
})
