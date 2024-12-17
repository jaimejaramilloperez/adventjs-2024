import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { inBox } from './index.js'

describe('Challenge #06 - 📦 Is the gift inside the box?', () => {
  it('Test #01 - Returns a Boolean', () => {
    const result = inBox([])
    const expected = 'boolean'
    assert.strictEqual(typeof result, expected)
  })

  it('Test #02 - inBox(["###", "#*#", "###"])', () => {
    const result = inBox([
      '###',
      '#*#',
      '###'
    ])

    const expected = true

    assert.strictEqual(result, expected)
  })

  it('Test #03 - inBox(["#*#", "###", "###"])', () => {
    const result = inBox([
      '#*#',
      '###',
      '###'
    ])

    const expected = false

    assert.strictEqual(result, expected)
  })

  it('Test #04 - inBox(["###", "# #", "###"])', () => {
    const result = inBox([
      '###',
      '# #',
      '###'
    ])

    const expected = false

    assert.strictEqual(result, expected)
  })

  it('Test #05 - inBox(["####", "#* #", "#  #", "####"])', () => {
    const result = inBox([
      '####',
      '#* #',
      '#  #',
      '####'
    ])

    const expected = true

    assert.strictEqual(result, expected)
  })

  it('Test #06 - inBox(["#####", "#   #", "#  #*", "####"])', () => {
    const result = inBox([
      '#####',
      '#   #',
      '#  #*',
      '####'
    ])

    const expected = false

    assert.strictEqual(result, expected)
  })

  it('Test #07 - inBox(["#####", "#   #", "#   #", "#   #", "#####"])', () => {
    const result = inBox([
      '#####',
      '#   #',
      '#   #',
      '#   #',
      '#####'
    ])

    const expected = false

    assert.strictEqual(result, expected)
  })

  it('Test #08 - inBox(["#####", "#   #", "#   #", "*#  #", "#####"])', () => {
    const result = inBox([
      '#####',
      '#   #',
      '#   #',
      '*#  #',
      '#####'
    ])

    const expected = false

    assert.strictEqual(result, expected)
  })

  it('Test #09 - inBox(["##*##", "#   #", "#   #", "#   #", "#####"])', () => {
    const result = inBox([
      '##*##',
      '#   #',
      '#   #',
      '#   #',
      '#####'
    ])

    const expected = false

    assert.strictEqual(result, expected)
  })

  it('Test #10 - inBox(["####", "#  #", "##*#"])', () => {
    const result = inBox([
      '####',
      '#  #',
      '##*#'
    ])

    const expected = false

    assert.strictEqual(result, expected)
  })

  it('Test #11 - inBox(["###", "###", "#*#"])', () => {
    const result = inBox([
      '###',
      '###',
      '#*#'
    ])

    const expected = false

    assert.strictEqual(result, expected)
  })
})
