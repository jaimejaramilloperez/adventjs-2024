import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { fixPackages } from './index.js'

describe('Challenge #07 - 👹 The Grinch\'s attack', () => {
  it('Test #01 - Returns a String', () => {
    const result = fixPackages('')
    const expected = 'string'
    assert.strictEqual(typeof result, expected)
  })

  it('Test #02 - fixPackages("a(bc)de")', () => {
    const result = fixPackages('a(bc)de')
    const expected = 'acbde'

    assert.strictEqual(result, expected)
  })

  it('Test #03 - fixPackages("a(bc(def)g)h")', () => {
    const result = fixPackages('a(bc(def)g)h')
    const expected = 'agdefcbh'

    assert.strictEqual(result, expected)
  })

  it('Test #04 - fixPackages("abc(def(gh)i)jk")', () => {
    const result = fixPackages('abc(def(gh)i)jk')
    const expected = 'abcighfedjk'

    assert.strictEqual(result, expected)
  })

  it('Test #05 - fixPackages("a(b(c))e")', () => {
    const result = fixPackages('a(b(c))e')
    const expected = 'acbe'

    assert.strictEqual(result, expected)
  })

  it('Test #06 - fixPackages("a(b(cd(efg)))h")', () => {
    const result = fixPackages('a(b(cd(efg)))h')
    const expected = 'acdgfebh'

    assert.strictEqual(result, expected)
  })

  it('Test #07 - fixPackages("(abc(def(ghi)))")', () => {
    const result = fixPackages('(abc(def(ghi)))')
    const expected = 'defihgcba'

    assert.strictEqual(result, expected)
  })
})
