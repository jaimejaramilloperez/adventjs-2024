/**
 * @param {number[]} indices
 * @param {number} length
 * @returns {string}
 */
export function drawRace (indices, length) {
  const lanesCount = indices.length
  const emptyLane = '~'.repeat(length)

  const race = indices.map((position, index) => {
    const isometricEffect = ' '.repeat(lanesCount - index - 1)

    const lane = position !== 0
      ? [...emptyLane].with(position, 'r').join('')
      : emptyLane

    return `${isometricEffect}${lane} /${index + 1}`
  })

  return race.join('\n')
}
