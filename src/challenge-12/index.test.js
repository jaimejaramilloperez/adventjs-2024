import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { calculatePrice } from './index.js'

describe('Challenge #12 - 💵 How much does the tree cost?', () => {
  it('Test #01 - Returns a Number', () => {
    const result = calculatePrice('')
    const expected = 'number'

    assert.strictEqual(typeof result, expected)
  })

  it('Test #02 - calculatePrice("***")', () => {
    const result = calculatePrice('***')
    const expected = 3

    assert.strictEqual(result, expected)
  })

  it('Test #03 - calculatePrice("*o")', () => {
    const result = calculatePrice('*o')
    const expected = 4

    assert.strictEqual(result, expected)
  })

  it('Test #04 - calculatePrice("o*")', () => {
    const result = calculatePrice('o*')
    const expected = 6

    assert.strictEqual(result, expected)
  })

  it('Test #05 - calculatePrice("*o@")', () => {
    const result = calculatePrice('*o@')
    const expected = 94

    assert.strictEqual(result, expected)
  })

  it('Test #06 - calculatePrice("^#")', () => {
    const result = calculatePrice('^#')
    const expected = 40

    assert.strictEqual(result, expected)
  })

  it('Test #07 - calculatePrice("#@Z")', () => {
    const result = calculatePrice('#@Z')
    const expected = undefined

    assert.strictEqual(result, expected)
  })
})
