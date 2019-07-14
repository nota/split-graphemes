/* eslint-env mocha */

import { malayalam } from '../lib/malayalam'
import { testBreak } from './helper'

describe('WordBreakMalayalam', function () {
  it('break correctly', function () {
    const regExp = new RegExp(malayalam, 'gu')
    testBreak(regExp, 'പറ്റി', ['പ', 'റ്റി'])
    testBreak(regExp, 'വളരെ', ['വ', 'ള', 'രെ'])
  })
})
