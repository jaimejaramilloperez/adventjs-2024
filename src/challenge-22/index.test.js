import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { generateGiftSets } from './index.js'

describe('Challenge #22 - 🎁 Generate gift combinations', () => {
  it('Test #01 - Returns an Array', () => {
    const result = generateGiftSets([])
    const expected = 'Array'

    assert.strictEqual(result.constructor.name, expected)
  })

  it('Test #02 - generateGiftSets(["car"])', () => {
    const result = generateGiftSets(['car'])

    const expected = [['car']]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #03 - generateGiftSets(["car", "doll"])', () => {
    const result = generateGiftSets(['car', 'doll'])

    const expected = [
      ['car'],
      ['doll'],
      ['car', 'doll']
    ]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #04 - generateGiftSets(["car", "doll", "puzzle"])', () => {
    const result = generateGiftSets(['car', 'doll', 'puzzle'])

    const expected = [
      ['car'],
      ['doll'],
      ['puzzle'],
      ['car', 'doll'],
      ['car', 'puzzle'],
      ['doll', 'puzzle'],
      ['car', 'doll', 'puzzle']
    ]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #05 - generateGiftSets(["apple", "banana", "cherry", "date"])', () => {
    const result = generateGiftSets(['apple', 'banana', 'cherry', 'date'])

    const expected = [
      ['apple'],
      ['banana'],
      ['cherry'],
      ['date'],
      ['apple', 'banana'],
      ['apple', 'cherry'],
      ['apple', 'date'],
      ['banana', 'cherry'],
      ['banana', 'date'],
      ['cherry', 'date'],
      ['apple', 'banana', 'cherry'],
      ['apple', 'banana', 'date'],
      ['apple', 'cherry', 'date'],
      ['banana', 'cherry', 'date'],
      ['apple', 'banana', 'cherry', 'date']
    ]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #06 - generateGiftSets(["pen", "notebook", "eraser", "pencil", "marker"])', () => {
    const result = generateGiftSets(['pen', 'notebook', 'eraser', 'pencil', 'marker'])

    const expected = [
      ['pen'],
      ['notebook'],
      ['eraser'],
      ['pencil'],
      ['marker'],
      ['pen', 'notebook'],
      ['pen', 'eraser'],
      ['pen', 'pencil'],
      ['pen', 'marker'],
      ['notebook', 'eraser'],
      ['notebook', 'pencil'],
      ['notebook', 'marker'],
      ['eraser', 'pencil'],
      ['eraser', 'marker'],
      ['pencil', 'marker'],
      ['pen', 'notebook', 'eraser'],
      ['pen', 'notebook', 'pencil'],
      ['pen', 'notebook', 'marker'],
      ['pen', 'eraser', 'pencil'],
      ['pen', 'eraser', 'marker'],
      ['pen', 'pencil', 'marker'],
      ['notebook', 'eraser', 'pencil'],
      ['notebook', 'eraser', 'marker'],
      ['notebook', 'pencil', 'marker'],
      ['eraser', 'pencil', 'marker'],
      ['pen', 'notebook', 'eraser', 'pencil'],
      ['pen', 'notebook', 'eraser', 'marker'],
      ['pen', 'notebook', 'pencil', 'marker'],
      ['pen', 'eraser', 'pencil', 'marker'],
      ['notebook', 'eraser', 'pencil', 'marker'],
      ['pen', 'notebook', 'eraser', 'pencil', 'marker']
    ]

    assert.deepStrictEqual(result, expected)
  })
})
