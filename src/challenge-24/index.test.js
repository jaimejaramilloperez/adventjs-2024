import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { isTreesSynchronized } from './index.js'

describe('Challenge #24 - 🪞 Check if trees are magical mirrors', () => {
  it('Test #01 - Returns an Array', () => {
    const result = isTreesSynchronized()
    const expected = 'Array'

    assert.strictEqual(result.constructor.name, expected)
  })

  it('Test #02 - isTreesSynchronized({ value: "🎄" }, { value: "🎄" })', () => {
    const result = isTreesSynchronized(
      { value: '🎄' },
      { value: '🎄' }
    )

    const expected = [true, '🎄']

    assert.deepStrictEqual(result, expected)
  })

  it('Test #03 - isTreesSynchronized({ value: "🎄", left: { value: "⭐" }, right: { value: "🎅" } }, { value: "🎄", left: { value: "🎅" }, right: { value: "⭐" } })', () => {
    const result = isTreesSynchronized(
      { value: '🎄', left: { value: '⭐' }, right: { value: '🎅' } },
      { value: '🎄', left: { value: '🎅' }, right: { value: '⭐' } }
    )

    const expected = [true, '🎄']

    assert.deepStrictEqual(result, expected)
  })

  it('Test #04 - isTreesSynchronized({ value: "✨", left: { value: "⭐" }, right: { value: "🎅" } }, { value: "✨", left: { value: "🎅" }, right: { value: "🎁" } })', () => {
    const result = isTreesSynchronized(
      { value: '✨', left: { value: '⭐' }, right: { value: '🎅' } },
      { value: '✨', left: { value: '🎅' }, right: { value: '🎁' } }
    )

    const expected = [false, '✨']

    assert.deepStrictEqual(result, expected)
  })

  it('Test #05 - isTreesSynchronized( { value: "🎁" }, { value: "🎁" })', () => {
    const result = isTreesSynchronized(
      { value: '🎁' },
      { value: '🎁' }
    )

    const expected = [true, '🎁']

    assert.deepStrictEqual(result, expected)
  })

  it('Test #06 - isTreesSynchronized({ value: "🎄" }, { value: "🎁" })', () => {
    const result = isTreesSynchronized(
      { value: '🎄' },
      { value: '🎁' }
    )

    const expected = [false, '🎄']

    assert.deepStrictEqual(result, expected)
  })

  it('Test #07 - isTreesSynchronized({ value: "🎄", left: { value: "⭐" } }, { value: "🎄", right: { value: "⭐" } })', () => {
    const result = isTreesSynchronized(
      { value: '🎄', left: { value: '⭐' } },
      { value: '🎄', right: { value: '⭐' } }
    )

    const expected = [true, '🎄']

    assert.deepStrictEqual(result, expected)
  })
})
