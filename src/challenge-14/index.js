/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
export function minMovesToStables (reindeer, stables) {
  reindeer.sort()
  stables.sort()

  let totalMoves = 0

  for (let i = 0; i < reindeer.length; i++) {
    totalMoves += Math.abs(reindeer[i] - stables[i])
  }

  return totalMoves
}
