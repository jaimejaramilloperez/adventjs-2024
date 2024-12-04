import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { createXmasTree } from './index.js'

describe('Challenge #04 - 🎄 Decorating the Christmas tree', () => {
  it('Test #01 - Returns a String', () => {
    const result = createXmasTree(3, '*')
    const expected = 'string'
    assert.strictEqual(typeof result, expected)
  })

  it('Test #02 - createXmasTree(3, "*")', () => {
    const result = createXmasTree(3, '*')
    const expected = `__*__
_***_
*****
__#__
__#__`

    assert.strictEqual(result, expected)
  })

  it('Test #02 - createXmasTree(5, "+")', () => {
    const result = createXmasTree(5, '+')
    const expected = `____+____
___+++___
__+++++__
_+++++++_
+++++++++
____#____
____#____`

    assert.strictEqual(result, expected)
  })

  it('Test #02 - createXmasTree(6, "@")', () => {
    const result = createXmasTree(6, '@')
    const expected = `_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____`

    assert.strictEqual(result, expected)
  })

  it('Test #02 - createXmasTree(1, "*")', () => {
    const result = createXmasTree(1, '*')
    const expected = `*
#
#`

    assert.strictEqual(result, expected)
  })

  it('Test #02 - createXmasTree(4, "#")', () => {
    const result = createXmasTree(4, '#')
    const expected = `___#___
__###__
_#####_
#######
___#___
___#___`

    assert.strictEqual(result, expected)
  })
})
