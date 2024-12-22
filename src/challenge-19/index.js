/**
 * @param {number} weight
 * @returns {string}
 */
export function distributeWeight (weight) {
  const boxRepresentations = {
    1: [' _ ', '|_|'],
    2: [' ___ ', '|___|'],
    5: [' _____ ', '|     |', '|_____|'],
    10: [' _________ ', '|         |', '|_________|']
  }

  const box = boxRepresentations[weight] || []
  if (box.length > 0) return box.join('\n')

  const boxSizes = Object.keys(boxRepresentations).sort((a, b) => b - a)
  const boxValues = []
  const stackedBoxes = []

  for (const size of boxSizes) {
    while (weight >= size) {
      weight -= size
      boxValues.push(size)
    }
  }

  const topBoxValue = boxValues.at(-1)
  const [topBoxBorder] = boxRepresentations[topBoxValue]
  stackedBoxes.push(topBoxBorder)

  while (boxValues.length > 0) {
    const topBoxValue = boxValues.pop()
    const topBox = boxRepresentations[topBoxValue]

    if (boxValues.length > 0) {
      const bottomBoxValue = boxValues.at(-1)
      const bottomBox = boxRepresentations[bottomBoxValue]

      const diffToClose = Math.max(0, bottomBox[0].length - topBox.at(-1).length - 1)
      const remainderToCloseTheBox = '_'.repeat(diffToClose)

      if (topBox.length >= 3) {
        const [, ...middle] = topBox
        middle.pop()
        stackedBoxes.push(...middle)
      }

      stackedBoxes.push(topBox.at(-1) + remainderToCloseTheBox)
    } else {
      const [, ...boxBase] = topBox
      stackedBoxes.push(...boxBase)
    }
  }

  return stackedBoxes.join('\n')
}
