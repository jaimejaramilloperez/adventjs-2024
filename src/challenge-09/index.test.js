import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { moveTrain } from './index.js'

describe('Challenge #09 - 🚂 The magic train', () => {
  it('Test #01 - Returns a String', () => {
    const result = moveTrain([
      '·····',
      '··*··',
      '··@··',
      '··o··',
      '··o··'
    ], 'U')

    const expected = 'string'

    assert.strictEqual(typeof result, expected)
  })

  it('Test #02 - moveTrain(["·····", "··*··", "··@··", "··o··", "··o··"], "U")', () => {
    const result = moveTrain([
      '·····',
      '··*··',
      '··@··',
      '··o··',
      '··o··'
    ], 'U')

    const expected = 'eat'

    assert.strictEqual(result, expected)
  })

  it('Test #03 - moveTrain(["·····", "··*··", "··.··", "··o··", "··@··"], "D")', () => {
    const result = moveTrain([
      '·····',
      '··*··',
      '··.··',
      '··o··',
      '··@··'
    ], 'D')

    const expected = 'crash'

    assert.strictEqual(result, expected)
  })

  it('Test #04 - moveTrain(["·····", "··*··", "··@··", "··o··", "··o··"], "D")', () => {
    const result = moveTrain([
      '·····',
      '··*··',
      '··@··',
      '··o··',
      '··o··'
    ], 'D')

    const expected = 'crash'

    assert.strictEqual(result, expected)
  })

  it('Test #05 - moveTrain(["·····", "··*··", "··@··", "··o··", "··o··"], "R")', () => {
    const result = moveTrain([
      '·····',
      '··*··',
      '··@··',
      '··o··',
      '··o··'
    ], 'R')

    const expected = 'none'

    assert.strictEqual(result, expected)
  })

  it('Test #06 - moveTrain(["··@··", "··o··", "·*o··", "··o··", "··o··"], "U")', () => {
    const result = moveTrain([
      '··@··',
      '··o··',
      '·*o··',
      '··o··',
      '··o··'
    ], 'U')

    const expected = 'crash'

    assert.strictEqual(result, expected)
  })

  it('Test #07 - moveTrain(["··@··", "··o··", "·*o··", "··o··", "··o··"], "L")', () => {
    const result = moveTrain([
      '··@··',
      '··o··',
      '·*o··',
      '··o··',
      '··o··'
    ], 'L')

    const expected = 'none'

    assert.strictEqual(result, expected)
  })

  it('Test #08 - moveTrain(["·····", "··@··", "··*··", "·····", "·····"], "D")', () => {
    const result = moveTrain([
      '·····',
      '··@··',
      '··*··',
      '·····',
      '·····'
    ], 'D')

    const expected = 'eat'

    assert.strictEqual(result, expected)
  })
})
