/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
export function detectBombs (grid) {
  if (grid.length === 0) return []

  const rows = grid.length
  const columns = grid[0].length
  const mappedArea = Array.from({ length: rows }, () => new Array(columns).fill(0))

  const DIRECTIONS = [
    [1, 0], [-1, 0],
    [0, 1], [0, -1],
    [1, 1], [1, -1],
    [-1, 1], [-1, -1]
  ]

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] === false) continue

      for (const [x, y] of DIRECTIONS) {
        const newX = i + x
        const newY = j + y

        if (mappedArea[newX]?.[newY] !== undefined) {
          mappedArea[newX][newY] += 1
        }
      }
    }
  }

  return mappedArea
}
