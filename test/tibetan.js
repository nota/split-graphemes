/* eslint-env mocha */

import { tibetan } from '../src/tibetan'
import { testBreak } from './helper'

describe('WordBreakTibetan', function () {
  it('break correctly', function () {
    const regExp = new RegExp(tibetan, 'gu')
    testBreak(regExp, 'གཟིགས་དང་', ['ག', 'ཟི', 'ག', 'ས', '་', 'ད', 'ང', '་'])
    testBreak(regExp, 'ལགས་མིན་', ['ལ', 'ག', 'ས', '་', 'མི', 'ན', '་'])
  })
})
