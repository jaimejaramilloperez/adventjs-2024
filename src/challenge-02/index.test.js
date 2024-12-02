import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { createFrame } from './index.js'

describe('Challenge #02 - 🖼️ Framing names', () => {
  it('Test #01 - Returns a String', () => {
    const result = createFrame(['midu'])
    const expected = 'string'
    assert.strictEqual(typeof result, expected)
  })

  it('Test #02 - createFrame(["midu"])', () => {
    const result = createFrame(['midu'])
    const expected = `********
* midu *
********`

    assert.strictEqual(result, expected)
  })

  it('Test #03 - createFrame(["midu", "madeval", "educalvolpz"])', () => {
    const result = createFrame(['midu', 'madeval', 'educalvolpz'])
    const expected = `***************
* midu        *
* madeval     *
* educalvolpz *
***************`

    assert.strictEqual(result, expected)
  })

  it('Test #04 - createFrame(["a", "bb", "ccc"])', () => {
    const result = createFrame(['a', 'bb', 'ccc'])
    const expected = `*******
* a   *
* bb  *
* ccc *
*******`

    assert.strictEqual(result, expected)
  })

  it('Test #05 - createFrame(["a", "bb", "ccc", "dddd"])', () => {
    const result = createFrame(['a', 'bb', 'ccc', 'dddd'])
    const expected = `********
* a    *
* bb   *
* ccc  *
* dddd *
********`

    assert.strictEqual(result, expected)
  })

  it('Test #06 - createFrame(["midu", "madeval", "educalvolpz", "midu"])', () => {
    const result = createFrame(['midu', 'madeval', 'educalvolpz', 'midu'])
    const expected = `***************
* midu        *
* madeval     *
* educalvolpz *
* midu        *
***************`

    assert.strictEqual(result, expected)
  })
})
