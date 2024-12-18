import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { drawRace } from './index.js'

describe('Challenge #08 - 🦌 The reindeer race', () => {
  it('Test #01 - Returns a String', () => {
    const result = drawRace([], 0)
    const expected = 'string'
    assert.strictEqual(typeof result, expected)
  })

  it('Test #02 - drawRace([0, 5, -3], 10)', () => {
    const result = drawRace([0, 5, -3], 10)

    const expected = `  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3`

    assert.strictEqual(result, expected)
  })

  it('Test #03 - drawRace([2, -1, 0, 5], 8)', () => {
    const result = drawRace([2, -1, 0, 5], 8)

    const expected = `   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4`

    assert.strictEqual(result, expected)
  })

  it('Test #04 - drawRace([3, 7, -2], 12)', () => {
    const result = drawRace([3, 7, -2], 12)

    const expected = `  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3`

    assert.strictEqual(result, expected)
  })

  it('Test #05 - drawRace([0, 0, 0], 6)', () => {
    const result = drawRace([0, 0, 0], 6)

    const expected = `  ~~~~~~ /1
 ~~~~~~ /2
~~~~~~ /3`

    assert.strictEqual(result, expected)
  })

  it('Test #06 - drawRace([5, 3, -4], 9)', () => {
    const result = drawRace([5, 3, -4], 9)

    const expected = `  ~~~~~r~~~ /1
 ~~~r~~~~~ /2
~~~~~r~~~ /3`

    assert.strictEqual(result, expected)
  })
})
