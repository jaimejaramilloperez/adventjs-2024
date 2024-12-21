import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { findInAgenda } from './index.js'

describe('Challenge #18 - 📇 Santa\'s Magic Agenda', () => {
  it('Test #01 - Returns an Object', () => {
    const result = findInAgenda('', '')
    const expected = 'object'

    assert.strictEqual(typeof result, expected)
  })

  it('Test #02 - findInAgenda(`+34-600-123-456 Calle Gran Via 12 <Juan Perez> Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654 <Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`, "34-600-123-456")', () => {
    const result = findInAgenda(`+34-600-123-456 Calle Gran Via 12 <Juan Perez>
  Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
  <Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`, '34-600-123-456')

    const expected = {
      name: 'Juan Perez',
      address: 'Calle Gran Via 12'
    }

    assert.deepStrictEqual(result, expected)
  })

  it('Test #03 - findInAgenda(`+34-600-123-456 Calle Gran Via 12 <Juan Perez> Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654 <Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`, "600-987")', () => {
    const result = findInAgenda(`+34-600-123-456 Calle Gran Via 12 <Juan Perez>
 Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
 <Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`, '600-987')

    const expected = {
      name: 'Maria Gomez',
      address: 'Plaza Mayor 45 Madrid 28013'
    }

    assert.deepStrictEqual(result, expected)
  })

  it('Test #04 - findInAgenda(`+34-600-123-456 Calle Gran Via 12 <Juan Perez> Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654 <Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`, "111")', () => {
    const result = findInAgenda(`+34-600-123-456 Calle Gran Via 12 <Juan Perez>
 Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
 <Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`, '111')

    const expected = null

    assert.deepStrictEqual(result, expected)
  })

  it('Test #05 - findInAgenda(`+34-600-123-456 Calle Gran Via 12 <Juan Perez> Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654 <Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`, "1")', () => {
    const result = findInAgenda(`+34-600-123-456 Calle Gran Via 12 <Juan Perez>
 Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
 <Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`, '1')

    const expected = null

    assert.deepStrictEqual(result, expected)
  })
})
