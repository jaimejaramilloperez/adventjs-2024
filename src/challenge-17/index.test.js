import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { detectBombs } from './index.js'

describe('Challenge #17 - 💣 Look for the Grinch\'s bombs', () => {
  it('Test #01 - Returns an Array', () => {
    const result = detectBombs([])
    const expected = 'Array'

    assert.strictEqual(result.constructor.name, expected)
  })

  it('Test #02 - detectBombs([[true, false, false], [false, true, false], [false, false, false]])', () => {
    const result = detectBombs([
      [true, false, false],
      [false, true, false],
      [false, false, false]
    ])

    const expected = [
      [1, 2, 1],
      [2, 1, 1],
      [1, 1, 1]
    ]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #03 - detectBombs([[false, true, false], [true, false, true], [false, true, false]])', () => {
    const result = detectBombs([
      [false, true, false],
      [true, false, true],
      [false, true, false]
    ])

    const expected = [
      [2, 2, 2],
      [2, 4, 2],
      [2, 2, 2]
    ]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #04 - detectBombs([[true, true], [true, true], [false, false]])', () => {
    const result = detectBombs([
      [true, true],
      [true, true],
      [false, false]
    ])

    const expected = [
      [3, 3],
      [3, 3],
      [2, 2]
    ]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #05 - detectBombs([[true, true], [true, true]])', () => {
    const result = detectBombs([
      [true, true],
      [true, true]
    ])

    const expected = [
      [3, 3],
      [3, 3]
    ]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #06 - detectBombs([[false, false, false], [false, true, false], [false, false, false]])', () => {
    const result = detectBombs([
      [false, false, false],
      [false, true, false],
      [false, false, false]
    ])

    const expected = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1]
    ]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #07 - detectBombs([[true, false], [false, false]])', () => {
    const result = detectBombs([
      [true, false],
      [false, false]
    ])

    const expected = [
      [0, 1],
      [1, 1]
    ]

    assert.deepStrictEqual(result, expected)
  })
})
