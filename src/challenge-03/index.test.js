import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { organizeInventory } from './index.js'

describe('Challenge #03 - 🏗️ Organizing the inventory', () => {
  it('Test #01 - Returns an Object', () => {
    const result = organizeInventory([])
    const expected = 'object'
    assert.strictEqual(typeof result, expected)
  })

  it('Test #02 - organizeInventory([])', () => {
    const result = organizeInventory([])
    const expected = {}
    assert.deepStrictEqual(result, expected)
  })

  it('Test #03 - organizeInventory([{ name: "doll", quantity: 5, category: "toys" }])', () => {
    const result = organizeInventory([
      { name: 'doll', quantity: 5, category: 'toys' }
    ])

    const expected = {
      toys: {
        doll: 5
      }
    }

    assert.deepStrictEqual(result, expected)
  })

  it('Test #04 - organizeInventory([{ name: "book", quantity: 10, category: "education" }, { name: "book", quantity: 5, category: "education" }, { name: "paint", quantity: 3, category: "art" }])', () => {
    const result = organizeInventory([
      { name: 'book', quantity: 10, category: 'education' },
      { name: 'book', quantity: 5, category: 'education' },
      { name: 'paint', quantity: 3, category: 'art' }
    ])

    const expected = {
      education: {
        book: 15
      },
      art: {
        paint: 3
      }
    }

    assert.deepStrictEqual(result, expected)
  })

  it('Test #05 - organizeInventory([{ name: "doll", quantity: 5, category: "toys" }, { name: "car", quantity: 3, category: "toys" }, { name: "ball", quantity: 2, category: "sports" }, { name: "car", quantity: 2, category: "toys" }, { name: "racket", quantity: 4, category: "sports" }])', () => {
    const result = organizeInventory([
      { name: 'doll', quantity: 5, category: 'toys' },
      { name: 'car', quantity: 3, category: 'toys' },
      { name: 'ball', quantity: 2, category: 'sports' },
      { name: 'car', quantity: 2, category: 'toys' },
      { name: 'racket', quantity: 4, category: 'sports' }
    ])

    const expected = {
      toys: {
        doll: 5,
        car: 5
      },
      sports: {
        ball: 2,
        racket: 4
      }
    }

    assert.deepStrictEqual(result, expected)
  })
})
