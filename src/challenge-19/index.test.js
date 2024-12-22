import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { distributeWeight } from './index.js'

// Note: The unicode character '\u0020' represents a blank space that is removed by the linter

describe('Challenge #19 - 📦 Stack magical boxes to deliver gifts', () => {
  it('Test #01 - Returns a String', () => {
    const result = distributeWeight(1)
    const expected = 'string'

    assert.strictEqual(typeof result, expected)
  })

  it('Test #02 - distributeWeight(1)', () => {
    const result = distributeWeight(1)

    const expected = ` _\u0020
|_|`

    assert.strictEqual(result, expected)
  })

  it('Test #03 - distributeWeight(2)', () => {
    const result = distributeWeight(2)

    const expected = ` ___\u0020
|___|`

    assert.strictEqual(result, expected)
  })

  it('Test #04 - distributeWeight(3)', () => {
    const result = distributeWeight(3)

    const expected = ` _\u0020
|_|_
|___|`

    assert.strictEqual(result, expected)
  })

  it('Test #05 - distributeWeight(4)', () => {
    const result = distributeWeight(4)

    const expected = ` ___\u0020
|___|
|___|`

    assert.strictEqual(result, expected)
  })

  it('Test #06 - distributeWeight(5)', () => {
    const result = distributeWeight(5)

    const expected = ` _____\u0020
|     |
|_____|`

    assert.strictEqual(result, expected)
  })

  it('Test #07 - distributeWeight(6)', () => {
    const result = distributeWeight(6)

    const expected = ` _\u0020
|_|___
|     |
|_____|`

    assert.strictEqual(result, expected)
  })

  it('Test #08 - distributeWeight(7)', () => {
    const result = distributeWeight(7)

    const expected = ` ___\u0020
|___|_
|     |
|_____|`

    assert.strictEqual(result, expected)
  })

  it('Test #09 - distributeWeight(18)', () => {
    const result = distributeWeight(18)

    const expected = ` _\u0020
|_|_
|___|_
|     |
|_____|___
|         |
|_________|`

    assert.strictEqual(result, expected)
  })

  it('Test #10 - distributeWeight(121)', () => {
    const result = distributeWeight(121)

    const expected = ` _\u0020
|_|_______
|         |
|_________|
|         |
|_________|
|         |
|_________|
|         |
|_________|
|         |
|_________|
|         |
|_________|
|         |
|_________|
|         |
|_________|
|         |
|_________|
|         |
|_________|
|         |
|_________|
|         |
|_________|`

    assert.strictEqual(result, expected)
  })
})
