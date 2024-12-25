import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { execute } from './index.js'

describe('Challenge #25 - 🪄 Execute the magical language', () => {
  it('Test #01 - Returns a Number', () => {
    const result = execute('')
    const expected = 'number'

    assert.strictEqual(typeof result, expected)
  })

  it('Test #02 - execute("+++")', () => {
    const result = execute('+++')
    const expected = 3

    assert.deepStrictEqual(result, expected)
  })

  it('Test #03 - execute("+--")', () => {
    const result = execute('+--')
    const expected = -1

    assert.deepStrictEqual(result, expected)
  })

  it('Test #04 - execute(">+++[-]")', () => {
    const result = execute('>+++[-]')
    const expected = 0

    assert.deepStrictEqual(result, expected)
  })

  it('Test #05 - execute(">>>+{++}")', () => {
    const result = execute('>>>+{++}')
    const expected = 3

    assert.deepStrictEqual(result, expected)
  })

  it('Test #06 - execute("+{[-]+}")', () => {
    const result = execute('+{[-]+}')
    const expected = 1

    assert.deepStrictEqual(result, expected)
  })

  it('Test #07 - execute("-[+>]++")', () => {
    const result = execute('-[+>]++')
    const expected = 2

    assert.deepStrictEqual(result, expected)
  })

  it('Test #08 - execute("-[+{++}]++{[-]}++")', () => {
    const result = execute('-[+{++}]++{[-]}++')
    const expected = 2

    assert.deepStrictEqual(result, expected)
  })

  it('Test #09 - execute("{+}{+}{+}")', () => {
    const result = execute('{+}{+}{+}')
    const expected = 0

    assert.deepStrictEqual(result, expected)
  })

  it('Test #10 - execute("")', () => {
    const result = execute('')
    const expected = 0

    assert.deepStrictEqual(result, expected)
  })

  it('Test #11 - execute("+++{[-]+++[-]+}")', () => {
    const result = execute('+++{[-]+++[-]+}')
    const expected = 1

    assert.deepStrictEqual(result, expected)
  })

  it('Test #12 - execute("{>++>++}")', () => {
    const result = execute('{>++>++}')
    const expected = 0

    assert.deepStrictEqual(result, expected)
  })

  it('Test #13 - execute("++++[-->]>++")', () => {
    const result = execute('++++[-->]>++')
    const expected = 2

    assert.deepStrictEqual(result, expected)
  })
})
