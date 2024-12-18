/**
 * @param {string[]} board
 * @param {'U' | 'D' | 'R' | 'L'} mov
 * @returns {'none' | 'crash' | 'eat'}
 */
export function moveTrain (board, mov) {
  let trainCab = null

  for (let i = 0; i < board.length; i++) {
    const position = board[i].indexOf('@')

    if (position !== -1) {
      trainCab = [i, position]
      break
    }
  }

  const [x, y] = trainCab

  const CELL_VALUES = {
    '*': 'eat',
    'o': 'crash',
    '·': 'none'
  }

  const MOVES = {
    R: board[x]?.[y + 1],
    L: board[x]?.[y - 1],
    D: board[x + 1]?.[y],
    U: board[x - 1]?.[y]
  }

  return CELL_VALUES[MOVES[mov]] ?? 'crash'
}
