import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { decodeFilename } from './index.js'

describe('Challenge #11 - 🏴‍☠️ Filenames encoded', () => {
  it('Test #01 - Returns a String', () => {
    const result = decodeFilename('')
    const expected = 'string'

    assert.strictEqual(typeof result, expected)
  })

  it('Test #02 - decodeFilename("2023122512345678_sleighDesign.png.grinchwa")', () => {
    const result = decodeFilename('2023122512345678_sleighDesign.png.grinchwa')
    const expected = 'sleighDesign.png'

    assert.strictEqual(result, expected)
  })

  it('Test #03 - decodeFilename("42_chimney_dimensions.pdf.hack2023")', () => {
    const result = decodeFilename('42_chimney_dimensions.pdf.hack2023')
    const expected = 'chimney_dimensions.pdf'

    assert.strictEqual(result, expected)
  })

  it('Test #04 - decodeFilename("987654321_elf-roster.csv.tempfile")', () => {
    const result = decodeFilename('987654321_elf-roster.csv.tempfile')
    const expected = 'elf-roster.csv'

    assert.strictEqual(result, expected)
  })

  it('Test #05 - decodeFilename("2024120912345678_magic_wand-blueprint.jpg.grinchbackup")', () => {
    const result = decodeFilename('2024120912345678_magic_wand-blueprint.jpg.grinchbackup')
    const expected = 'magic_wand-blueprint.jpg'

    assert.strictEqual(result, expected)
  })

  it('Test #06 - decodeFilename("51231_trainSchedule.txt.extra")', () => {
    const result = decodeFilename('51231_trainSchedule.txt.extra')
    const expected = 'trainSchedule.txt'

    assert.strictEqual(result, expected)
  })
})
