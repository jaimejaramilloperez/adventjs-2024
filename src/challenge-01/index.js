/**
 * @param {number[]} gifts
 * @returns {number[]}
 */
export function prepareGifts (gifts) {
  return [...new Set(gifts)].sort((a, b) => a - b)
}
