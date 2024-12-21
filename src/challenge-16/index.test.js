import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { removeSnow } from './index.js'

describe('Challenge #16 - ❄️ Cleaning the snow path', () => {
  it('Test #01 - Returns a String', () => {
    const result = removeSnow('')
    const expected = 'string'

    assert.strictEqual(typeof result, expected)
  })

  it('Test #02 - removeSnow("abbaca")', () => {
    const result = removeSnow('abbaca')
    const expected = 'ca'

    assert.strictEqual(result, expected)
  })

  it('Test #03 - removeSnow("azxxzy")', () => {
    const result = removeSnow('azxxzy')
    const expected = 'ay'

    assert.strictEqual(result, expected)
  })

  it('Test #04 - removeSnow("aabccba")', () => {
    const result = removeSnow('aabccba')
    const expected = 'a'

    assert.strictEqual(result, expected)
  })

  it('Test #05 - removeSnow("aaabbaacc")', () => {
    const result = removeSnow('aaabbaacc')
    const expected = 'a'

    assert.strictEqual(result, expected)
  })

  it('Test #06 - removeSnow("xyzzy")', () => {
    const result = removeSnow('xyzzy')
    const expected = 'x'

    assert.strictEqual(result, expected)
  })

  it('Test #07 - removeSnow("abbacddce")', () => {
    const result = removeSnow('abbacddce')
    const expected = 'e'

    assert.strictEqual(result, expected)
  })

  it('Test #08 - removeSnow("")', () => {
    const result = removeSnow('')
    const expected = ''

    assert.strictEqual(result, expected)
  })

  it('Test #09 - removeSnow("a")', () => {
    const result = removeSnow('a')
    const expected = 'a'

    assert.strictEqual(result, expected)
  })

  it('Test #10 - removeSnow("aa")', () => {
    const result = removeSnow('aa')
    const expected = ''

    assert.strictEqual(result, expected)
  })

  it('Test #11 - removeSnow("ab")', () => {
    const result = removeSnow('ab')
    const expected = 'ab'

    assert.strictEqual(result, expected)
  })

  it('Test #12 - removeSnow("abc")', () => {
    const result = removeSnow('abc')
    const expected = 'abc'

    assert.strictEqual(result, expected)
  })
})
