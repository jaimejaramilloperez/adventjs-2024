import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { drawTable } from './index.js'

describe('Challenge #15 - ✏️ Drawing tables', () => {
  it('Test #01 - Returns a String', () => {
    const result = drawTable([])
    const expected = 'string'

    assert.strictEqual(typeof result, expected)
  })

  it('Test #02 - drawTable([{ name: "Alice", city: "London" }])', () => {
    const result = drawTable([{ name: 'Alice', city: 'London' }])

    const expected = `+-------+--------+
| Name  | City   |
+-------+--------+
| Alice | London |
+-------+--------+`

    assert.strictEqual(result, expected)
  })

  it('Test #03 - drawTable([{ name: "Alice", city: "London" }, { name: "Bob", city: "Paris" }])', () => {
    const result = drawTable([
      { name: 'Alice', city: 'London' },
      { name: 'Bob', city: 'Paris' }
    ])

    const expected = `+-------+--------+
| Name  | City   |
+-------+--------+
| Alice | London |
| Bob   | Paris  |
+-------+--------+`

    assert.strictEqual(result, expected)
  })

  it('Test #04 - drawTable([{ gift: "Doll", quantity: 10 }, { gift: "Book", quantity: 5 }, { gift: "Music CD", quantity: 1 }])', () => {
    const result = drawTable([
      { gift: 'Doll', quantity: 10 },
      { gift: 'Book', quantity: 5 },
      { gift: 'Music CD', quantity: 1 }
    ])

    const expected = `+----------+----------+
| Gift     | Quantity |
+----------+----------+
| Doll     | 10       |
| Book     | 5        |
| Music CD | 1        |
+----------+----------+`

    assert.strictEqual(result, expected)
  })

  it('Test #05 - drawTable([{ id: 1, score: 95 }, { id: 2, score: 85 }])', () => {
    const result = drawTable([
      { id: 1, score: 95 },
      { id: 2, score: 85 }
    ])

    const expected = `+----+-------+
| Id | Score |
+----+-------+
| 1  | 95    |
| 2  | 85    |
+----+-------+`

    assert.strictEqual(result, expected)
  })

  it('Test #06 - drawTable([{ id: "midugato", isCat: true }, { id: "miduperro", isCat: false }])', () => {
    const result = drawTable([
      { id: 'midugato', isCat: true },
      { id: 'miduperro', isCat: false }
    ])

    const expected = `+-----------+-------+
| Id        | IsCat |
+-----------+-------+
| midugato  | true  |
| miduperro | false |
+-----------+-------+`

    assert.strictEqual(result, expected)
  })

  it('Test #07 - drawTable([{ game: "indianajones", subtitle: "the game" }, { game: "pokemonblue", subtitle: "" }])', () => {
    const result = drawTable([
      { game: 'indianajones', subtitle: 'the game' },
      { game: 'pokemonblue', subtitle: '' }
    ])

    const expected = `+--------------+----------+
| Game         | Subtitle |
+--------------+----------+
| indianajones | the game |
| pokemonblue  |          |
+--------------+----------+`

    assert.strictEqual(result, expected)
  })
})
