import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { findMissingNumbers } from './index.js'

describe('Challenge #23 - 🔢 Find the missing numbers', () => {
  it('Test #01 - Returns an Array', () => {
    const result = findMissingNumbers([])
    const expected = 'Array'

    assert.strictEqual(result.constructor.name, expected)
  })

  it('Test #02 - findMissingNumbers([1, 2, 4, 6])', () => {
    const result = findMissingNumbers([1, 2, 4, 6])
    const expected = [3, 5]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #03 - findMissingNumbers([4, 8, 7, 2])', () => {
    const result = findMissingNumbers([4, 8, 7, 2])
    const expected = [1, 3, 5, 6]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #04 - findMissingNumbers([3, 2, 1, 1])', () => {
    const result = findMissingNumbers([3, 2, 1, 1])
    const expected = []

    assert.deepStrictEqual(result, expected)
  })

  it('Test #05 - findMissingNumbers([5, 5, 5, 3, 3, 2, 1])', () => {
    const result = findMissingNumbers([5, 5, 5, 3, 3, 2, 1])
    const expected = [4]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #06 - findMissingNumbers([1, 2, 3, 4, 5])', () => {
    const result = findMissingNumbers([1, 2, 3, 4, 5])
    const expected = []

    assert.deepStrictEqual(result, expected)
  })
})
