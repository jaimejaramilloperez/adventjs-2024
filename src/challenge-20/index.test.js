import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { fixGiftList } from './index.js'

describe('Challenge #20 - 🎁 Find missing and duplicate gifts', () => {
  it('Test #01 - Returns an Object', () => {
    const result = fixGiftList([], [])
    const expected = 'object'

    assert.strictEqual(typeof result, expected)
  })

  it('Test #02 - fixGiftList(["puzzle", "car"], ["puzzle", "car", "ball"])', () => {
    const result = fixGiftList(['puzzle', 'car'], ['puzzle', 'car', 'ball'])

    const expected = {
      'missing': {
        'ball': 1
      },
      'extra': {}
    }

    assert.deepStrictEqual(result, expected)
  })

  it('Test #03 - fixGiftList(["car", "puzzle", "car"], ["puzzle", "car", "doll"])', () => {
    const result = fixGiftList(['car', 'puzzle', 'car'], ['puzzle', 'car', 'doll'])

    const expected = {
      'missing': {
        'doll': 1
      },
      'extra': {
        'car': 1
      }
    }

    assert.deepStrictEqual(result, expected)
  })

  it('Test #04 - fixGiftList(["train", "book", "kite"], ["train", "kite", "book", "kite"])', () => {
    const result = fixGiftList(['train', 'book', 'kite'], ['train', 'kite', 'book', 'kite'])

    const expected = {
      'missing': {
        'kite': 1
      },
      'extra': {}
    }

    assert.deepStrictEqual(result, expected)
  })

  it('Test #05 - fixGiftList(["bear", "car"], ["bear", "car", "car"])', () => {
    const result = fixGiftList(['bear', 'car'], ['bear', 'car', 'car'])

    const expected = {
      'missing': {
        'car': 1
      },
      'extra': {}
    }

    assert.deepStrictEqual(result, expected)
  })

  it('Test #06 - fixGiftList([], ["bear", "car", "car"])', () => {
    const result = fixGiftList([], ['bear', 'car', 'car'])

    const expected = {
      'missing': {
        'car': 2,
        'bear': 1
      },
      'extra': {}
    }

    assert.deepStrictEqual(result, expected)
  })

  it('Test #07 - fixGiftList(["puzzle", "puzzle", "car"], ["puzzle", "car"])', () => {
    const result = fixGiftList(['puzzle', 'puzzle', 'car'], ['puzzle', 'car'])

    const expected = {
      'missing': {},
      'extra': {
        'puzzle': 1
      }
    }

    assert.deepStrictEqual(result, expected)
  })

  it('Test #08 - fixGiftList(["car"], ["car", "puzzle", "ball"])', () => {
    const result = fixGiftList(['car'], ['car', 'puzzle', 'ball'])

    const expected = {
      'missing': {
        'puzzle': 1,
        'ball': 1
      },
      'extra': {}
    }

    assert.deepStrictEqual(result, expected)
  })

  it('Test #09 - fixGiftList(["bear", "bear", "car"], ["bear", "bear", "car"])', () => {
    const result = fixGiftList(['bear', 'bear', 'car'], ['bear', 'bear', 'car'])

    const expected = {
      'missing': {},
      'extra': {}
    }

    assert.deepStrictEqual(result, expected)
  })
})
