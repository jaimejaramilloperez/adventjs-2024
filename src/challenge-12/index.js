/**
 * @param {string[]} ornaments
 * @returns {number | undefined}
 */
export function calculatePrice (ornaments) {
  const ORNAMENTS_PRICING = {
    '*': 1,
    'o': 5,
    '^': 10,
    '#': 50,
    '@': 100
  }

  const ornamentsLength = ornaments.length - 1
  let sum = 0
  let prevValue = 0

  for (let i = ornamentsLength; i >= 0; i--) {
    const ornament = ornaments[i]

    const value = ORNAMENTS_PRICING[ornament]
    if (!value) return undefined

    if (prevValue > value) {
      sum -= value
    } else {
      sum += value
    }

    prevValue = value
  }

  return sum
}
