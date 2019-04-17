/* eslint-env mocha */

import { telugu } from '../lib/telugu'
import { testBreak } from './helper'

describe('WordBreakTelugu', function () {
  it('break correctly', function () {
    const regExp = new RegExp(telugu, 'gu')
    testBreak(regExp, 'నమస్కారం', ['న', 'మ', 'స్కా', 'రం'])
    testBreak(regExp, 'పుట్టపర్తి', ['పు', 'ట్ట', 'ప', 'ర్తి'])
    testBreak(regExp, 'ఉన్నారు', ['ఉ', 'న్నా', 'రు'])
  })
})
