/**
 * @param {string[]} box
 * @returns {boolean}
 */
export function inBox (box) {
  for (let i = 1; i < box.length - 1; i++) {
    const row = box[i]

    const hasGiftInBounds = (
      row.includes('*') &&
      row[0] === '#' &&
      row[row.length - 1] === '#'
    )

    if (hasGiftInBounds) return true
  }

  return false
}
