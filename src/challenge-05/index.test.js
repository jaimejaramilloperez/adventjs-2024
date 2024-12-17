import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { organizeShoes } from './index.js'

describe('Challenge #05 - 👞 Shoe pairing', () => {
  it('Test #01 - Returns an Array', () => {
    const result = organizeShoes([])
    const expected = 'Array'
    assert.strictEqual(result.constructor.name, expected)
  })

  it('Test #02 - organizeShoes([ { type: "I", size: 38 },{ type: "R", size: 38 },{ type: "R", size: 42 },{ type: "I", size: 41 },{ type: "I", size: 42 } ])', () => {
    const result = organizeShoes([
      { type: 'I', size: 38 },
      { type: 'R', size: 38 },
      { type: 'R', size: 42 },
      { type: 'I', size: 41 },
      { type: 'I', size: 42 }
    ])

    const expected = [38, 42]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #03 - organizeShoes([ { type: "I", size: 38 }, { type: "R", size: 38 }, { type: "I", size: 38 }, { type: "I", size: 38 }, { type: "R", size: 38 } ])', () => {
    const result = organizeShoes([
      { type: 'I', size: 38 },
      { type: 'R', size: 38 },
      { type: 'I', size: 38 },
      { type: 'I', size: 38 },
      { type: 'R', size: 38 }
    ])

    const expected = [38, 38]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #04 - organizeShoes([ { type: "I", size: 38 }, { type: "R", size: 36 }, { type: "R", size: 42 }, { type: "I", size: 41 }, { type: "I", size: 42 } ])', () => {
    const result = organizeShoes([
      { type: 'I', size: 38 },
      { type: 'R', size: 36 },
      { type: 'R', size: 42 },
      { type: 'I', size: 41 },
      { type: 'I', size: 42 }
    ])

    const expected = [42]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #05 - organizeShoes([ { type: "I", size: 40 }, { type: "R", size: 40 }, { type: "I", size: 40 }, { type: "R", size: 40 } ])', () => {
    const result = organizeShoes([
      { type: 'I', size: 40 },
      { type: 'R', size: 40 },
      { type: 'I', size: 40 },
      { type: 'R', size: 40 }
    ])

    const expected = [40, 40]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #06 - organizeShoes([ { type: "I", size: 39 }, { type: "R", size: 39 }, { type: "R", size: 39 } ])', () => {
    const result = organizeShoes([
      { type: 'I', size: 39 },
      { type: 'R', size: 39 },
      { type: 'R', size: 39 }
    ])

    const expected = [39]

    assert.deepStrictEqual(result, expected)
  })
})
