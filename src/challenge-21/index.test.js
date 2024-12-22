import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { treeHeight } from './index.js'

describe('Challenge #21 - 🎄 Calculate the height of the Christmas tree', () => {
  it('Test #01 - Returns a Number', () => {
    const result = treeHeight(null)
    const expected = 'number'

    assert.strictEqual(typeof result, expected)
  })

  it('Test #02 - treeHeight({ value: "🎁", left: null, right: null })', () => {
    const result = treeHeight({
      value: '🎁',
      left: null,
      right: null
    })

    const expected = 1

    assert.strictEqual(result, expected)
  })

  it('Test #03 - treeHeight({ value: "🎁", left: { value: "🎄", left: null, right: null }, right: { value: "❄️", left: null, right: null } })', () => {
    const result = treeHeight({
      value: '🎁',
      left: {
        value: '🎄',
        left: null,
        right: null
      },
      right: {
        value: '❄️',
        left: null,
        right: null
      }
    })

    const expected = 2

    assert.strictEqual(result, expected)
  })

  it('Test #04 - treeHeight({ value: "🎁", left: { value: "🎄", left: { value: "⭐", left: null, right: null }, right: null }, right: { value: "❄️", left: null, right: null } })', () => {
    const result = treeHeight({
      value: '🎁',
      left: {
        value: '🎄',
        left: {
          value: '⭐',
          left: null,
          right: null
        },
        right: null
      },
      right: {
        value: '❄️',
        left: null,
        right: null
      }
    })

    const expected = 3

    assert.strictEqual(result, expected)
  })

  it('Test #05 - treeHeight(null)', () => {
    const result = treeHeight(null)

    const expected = 0

    assert.strictEqual(result, expected)
  })

  it('Test #06 - treeHeight({ value: "🎁", left: { value: "🎄", left: { value: "⭐", left: { value: "🎅", left: null, right: null }, right: null }, right: null }, right: null })', () => {
    const result = treeHeight({
      value: '🎁',
      left: {
        value: '🎄',
        left: {
          value: '⭐',
          left: {
            value: '🎅',
            left: null,
            right: null
          },
          right: null
        },
        right: null
      },
      right: null
    })

    const expected = 4

    assert.strictEqual(result, expected)
  })
})
