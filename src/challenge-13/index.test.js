import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { isRobotBack } from './index.js'

describe('Challenge #13 - 🤖 Is the robot back?', () => {
  it('Test #01 - Returns a Boolean', () => {
    const result = isRobotBack('RL')
    const expected = 'boolean'

    assert.strictEqual(typeof result, expected)
  })

  it('Test #02 - isRobotBack("R")', () => {
    const result = isRobotBack('R')
    const expected = [1, 0]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #03 - isRobotBack("RL")', () => {
    const result = isRobotBack('RL')
    const expected = true

    assert.strictEqual(result, expected)
  })

  it('Test #04 - isRobotBack("RLUD")', () => {
    const result = isRobotBack('RLUD')
    const expected = true

    assert.strictEqual(result, expected)
  })

  it('Test #05 - isRobotBack("*RU")', () => {
    const result = isRobotBack('*RU')
    const expected = [2, 1]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #06 - isRobotBack("R*U")', () => {
    const result = isRobotBack('R*U')
    const expected = [1, 2]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #07 - isRobotBack("LLL!R")', () => {
    const result = isRobotBack('LLL!R')
    const expected = [-4, 0]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #08 - isRobotBack("R?R")', () => {
    const result = isRobotBack('R?R')
    const expected = [1, 0]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #09 - isRobotBack("U?D")', () => {
    const result = isRobotBack('U?D')
    const expected = true

    assert.strictEqual(result, expected)
  })

  it('Test #10 - isRobotBack("R!L")', () => {
    const result = isRobotBack('R!L')
    const expected = [2, 0]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #11 - isRobotBack("U!D")', () => {
    const result = isRobotBack('U!D')
    const expected = [0, 2]

    assert.deepStrictEqual(result, expected)
  })

  it('Test #12 - isRobotBack("R?L")', () => {
    const result = isRobotBack('R?L')
    const expected = true

    assert.strictEqual(result, expected)
  })

  it('Test #13 - isRobotBack("U?U")', () => {
    const result = isRobotBack('U?U')
    const expected = [0, 1]

    assert.deepStrictEqual(result, expected)
  })
})
