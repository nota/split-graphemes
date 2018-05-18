/* eslint-env mocha */

import {lao} from '../src/lao'
import {testBreak} from './helper'

describe('WordBreakLao', function () {
  it('break correctly', function () {
    const regExp = new RegExp(lao, 'gu')
    testBreak(regExp, 'ສະບາຍດີ', ['ສ', 'ະ', 'ບ', 'າ', 'ຍ', 'ດີ'])
    testBreak(regExp, 'ກະລຸນາຮູ້ສຶກບໍ່ເສຍຄ່າ', ['ກ', 'ະ', 'ລຸ', 'ນ', 'າ', 'ຮູ້', 'ສຶ', 'ກ', 'ບໍ່', 'ເ', 'ສ', 'ຍ', 'ຄ່', 'າ'])
  })
})
