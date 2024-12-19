import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { compile } from './index.js'

describe('Challenge #10 - 👩‍💻 The elfish assembler', () => {
  it('Test #01 - Returns a Number', () => {
    const result = compile(['MOV 0 A', 'INC A'])
    const expected = 'number'

    assert.strictEqual(typeof result, expected)
  })

  it('Test #02 - compile(["MOV 0 A", "INC A"])', () => {
    const result = compile([
      'MOV 0 A',
      'INC A'
    ])

    const expected = 1

    assert.strictEqual(result, expected)
  })

  it('Test #03 - compile(["INC A", "INC A", "DEC A", "MOV A B"])', () => {
    const result = compile([
      'INC A',
      'INC A',
      'DEC A',
      'MOV A B'
    ])

    const expected = 1

    assert.strictEqual(result, expected)
  })

  it('Test #04 - compile(["MOV 5 B", "DEC B", "MOV B A", "INC A"])', () => {
    const result = compile([
      'MOV 5 B',
      'DEC B',
      'MOV B A',
      'INC A'
    ])

    const expected = 5

    assert.strictEqual(result, expected)
  })

  it('Test #05 - compile(["INC C", "DEC B", "MOV C Y", "INC Y"])', () => {
    const result = compile([
      'INC C',
      'DEC B',
      'MOV C Y',
      'INC Y'
    ])

    const expected = undefined

    assert.strictEqual(result, expected)
  })

  it('Test #06 - compile(["MOV 2 X", "DEC X", "DEC X", "JMP X 1", "MOV X A"])', () => {
    const result = compile(['MOV 2 X',
      'DEC X',
      'DEC X',
      'JMP X 1',
      'MOV X A'
    ])

    const expected = -2

    assert.strictEqual(result, expected)
  })

  it('Test #07 - compile(["MOV 3 C", "DEC C", "DEC C", "DEC C", "JMP C 3", "MOV C A"])', () => {
    const result = compile([
      'MOV 3 C',
      'DEC C',
      'DEC C',
      'DEC C',
      'JMP C 3',
      'MOV C A'
    ])

    const expected = -1

    assert.strictEqual(result, expected)
  })
})
