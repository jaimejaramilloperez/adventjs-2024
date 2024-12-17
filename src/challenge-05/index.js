/**
* @typedef {Object} Shoe
* @property {'I' | 'R'} type
* @property {number} size
*/

/**
 * @param {Shoe[]} shoes
 * @returns {number[]}
 */
export function organizeShoes (shoes) {
  const pairings = {}

  for (const shoe of shoes) {
    const { type, size } = shoe
    pairings[size] ??= { I: 0, R: 0 }
    pairings[size][type]++
  }

  return Object.entries(pairings).flatMap(([key, value]) => {
    const quantity = Math.min(value.I, value.R)
    return Array(quantity).fill(Number(key))
  })
}
