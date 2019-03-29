/* eslint-env mocha */

import { assert } from 'chai'

export function testBreak (regExp, source, results) {
  const res = source.match(regExp)
  assert.deepEqual(res, results)
}
