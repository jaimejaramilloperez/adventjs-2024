import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { minMovesToStables } from './index.js'

describe('Challenge #14 - 🦌 Settling the reindeer', () => {
  it('Test #01 - Returns a number', () => {
    const result = minMovesToStables([], [])
    const expected = 'number'

    assert.strictEqual(typeof result, expected)
  })

  it('Test #02 - minMovesToStables([2, 6, 9], [3, 8, 5])', () => {
    const result = minMovesToStables([2, 6, 9], [3, 8, 5])
    const expected = 3

    assert.deepStrictEqual(result, expected)
  })

  it('Test #03 - minMovesToStables([1, 1, 3], [1, 4, 8])', () => {
    const result = minMovesToStables([1, 1, 3], [1, 4, 8])
    const expected = 8

    assert.deepStrictEqual(result, expected)
  })

  it('Test #04 - minMovesToStables([5, 15, 10], [8, 18, 12])', () => {
    const result = minMovesToStables([5, 15, 10], [8, 18, 12])
    const expected = 8

    assert.deepStrictEqual(result, expected)
  })

  it('Test #05 - minMovesToStables([30, 1, 2], [1, 2, 30])', () => {
    const result = minMovesToStables([30, 1, 2], [1, 2, 30])
    const expected = 0

    assert.deepStrictEqual(result, expected)
  })

  it('Test #06 - minMovesToStables([30, 20, 10], [35, 25, 15])', () => {
    const result = minMovesToStables([30, 20, 10], [35, 25, 15])
    const expected = 15

    assert.deepStrictEqual(result, expected)
  })

  it('Test #07 - minMovesToStables([100, 1], [50, 75])', () => {
    const result = minMovesToStables([100, 1], [50, 75])
    const expected = 74

    assert.deepStrictEqual(result, expected)
  })
})
