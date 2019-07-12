/* eslint-env mocha */

import { thai } from '../lib/thai'
import { testBreak } from './helper'

describe('WordBreakThai', function () {
  it('break correctly', function () {
    const regExp = new RegExp(thai, 'gu')
    testBreak(regExp, 'ไม้ทัณฑฆาต', ['ไ', 'ม้', 'ทั', 'ณ', 'ฑ', 'ฆ', 'า', 'ต'])
    testBreak(regExp, 'ข้าวมันไก่', ['ข้', 'า', 'ว', 'มั', 'น', 'ไ', 'ก่'])
    testBreak(regExp, 'ลำแสง', ['ลำ', 'แ', 'ส', 'ง'])
  })
})
