/**
 * @param {string} moves
 * @returns {true | [number, number]}
 */
export function isRobotBack (moves) {
  const currentPosition = [0, 0]
  const executedMovements = new Set()

  const MOVEMENT_VECTORS = {
    L: [-1, 0],
    R: [1, 0],
    U: [0, 1],
    D: [0, -1]
  }

  const INVERSE_MOVEMENTS = { L: 'R', R: 'L', U: 'D', D: 'U' }

  const MOVEMENT_MODIFIERS = {
    '*': (nextMovement) => {
      executedMovements.add(nextMovement)
      return MOVEMENT_VECTORS[nextMovement].map((value) => value * 2)
    },
    '!': (nextMovement) => {
      const inverseMovement = INVERSE_MOVEMENTS[nextMovement]
      executedMovements.add(inverseMovement)
      return MOVEMENT_VECTORS[inverseMovement]
    },
    '?': (nextMovement) => {
      if (executedMovements.has(nextMovement)) return [0, 0]
      executedMovements.add(nextMovement)
      return MOVEMENT_VECTORS[nextMovement]
    }
  }

  for (let i = 0; i < moves.length; i++) {
    let movementDelta = []

    const currentMovement = moves[i]
    const vector = MOVEMENT_VECTORS[currentMovement]

    if (vector) {
      executedMovements.add(currentMovement)
      movementDelta = vector
    } else {
      const nextCommand = moves[i + 1]
      movementDelta = MOVEMENT_MODIFIERS[currentMovement](nextCommand)
      i++
    }

    currentPosition[0] += movementDelta[0]
    currentPosition[1] += movementDelta[1]
  }

  return currentPosition[0] === 0 && currentPosition[1] === 0
    ? true
    : currentPosition
}
