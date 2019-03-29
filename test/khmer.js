/* eslint-env mocha */

import { khmer } from '../src/khmer'
import { testBreak } from './helper'

describe('WordBreakKhmer', function () {
  it('break correctly', function () {
    const regExp = new RegExp(khmer, 'gu')
    testBreak(regExp, 'ស្រីៗ', ['ស្រី', 'ៗ'])
    testBreak(regExp, 'ច្រើនឡើងៗ', ['ច្រើ', 'ន', 'ឡើ', 'ង', 'ៗ'])
    testBreak(regExp, 'ប៉ុស្ដិ៍', ['ប៉ុ', 'ស្ដិ៍'])
    testBreak(regExp, 'ផម្រាបសួរ', ['ផ', 'ម្រា', 'ប', 'សួ', 'រ'])
  })
})
