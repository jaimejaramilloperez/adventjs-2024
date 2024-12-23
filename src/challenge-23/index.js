/**
 * @param {number[]} nums
 * @returns {number[]}
 */
export function findMissingNumbers (nums) {
  const max = Math.max(...nums)
  const currentNums = new Set(nums)

  const expectedNums = new Set(Array.from({ length: max }, (_, i) => i + 1))
  const missing = expectedNums.difference(currentNums)

  return [...missing]
}
