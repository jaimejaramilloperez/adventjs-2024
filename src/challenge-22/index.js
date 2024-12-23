/**
 * @param {string[]} gifts
 * @returns {string[][]}
 */
export function generateGiftSets (gifts) {
  const giftSets = []

  const backtrack = (currentCombination = [], startIndex = 0) => {
    if (currentCombination.length > 0) {
      giftSets.push([...currentCombination])
    }

    for (let i = startIndex; i < gifts.length; i++) {
      currentCombination.push(gifts[i])
      backtrack(currentCombination, i + 1)
      currentCombination.pop()
    }
  }

  backtrack()
  return giftSets.sort((a, b) => a.length - b.length)
}
