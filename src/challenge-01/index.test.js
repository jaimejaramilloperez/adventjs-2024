import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { prepareGifts } from './index.js'

describe('Challenge #01 - 🎁 First gift repeated!', () => {
  it('Test #01 - Returns an Array', () => {
    const result = prepareGifts([3, 1, 2, 3, 4, 2, 5])
    const expected = 'Array'
    assert.strictEqual(result.constructor.name, expected)
  })

  it('Test #02 - prepareGifts([3, 1, 2, 3, 4, 2, 5])', () => {
    const result = prepareGifts([3, 1, 2, 3, 4, 2, 5])
    const expected = [1, 2, 3, 4, 5]
    assert.deepStrictEqual(result, expected)
  })

  it('Test #03 - prepareGifts([5, 5, 5, 5])', () => {
    const result = prepareGifts([5, 5, 5, 5])
    const expected = [5]
    assert.deepStrictEqual(result, expected)
  })

  it('Test #04 - prepareGifts([1, 2, 3])', () => {
    const result = prepareGifts([1, 2, 3])
    const expected = [1, 2, 3]
    assert.deepStrictEqual(result, expected)
  })

  it('Test #05 - prepareGifts([])', () => {
    const result = prepareGifts([])
    const expected = []
    assert.deepStrictEqual(result, expected)
  })

  it('Test #06 - prepareGifts([10, 20, 10, 30, 20, 30, 40])', () => {
    const result = prepareGifts([10, 20, 10, 30, 20, 30, 40])
    const expected = [10, 20, 30, 40]
    assert.deepStrictEqual(result, expected)
  })

  it('Test #07 - prepareGifts([3, 1, 2, 3, 1, 2])', () => {
    const result = prepareGifts([3, 1, 2, 3, 1, 2])
    const expected = [1, 2, 3]
    assert.deepStrictEqual(result, expected)
  })
})
