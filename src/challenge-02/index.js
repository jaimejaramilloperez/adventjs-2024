/**
 * @param {string[]} names
 * @returns {string}
 */
export function createFrame (names) {
  const maxLength = Math.max(...names.map((name) => name.length))

  const frameWidth = maxLength + 4
  const edge = '*'.repeat(frameWidth)

  const formattedNames = names.map((name) => `* ${name.padEnd(maxLength, ' ')} *`)
  const frame = [edge, formattedNames.join('\n'), edge]

  return frame.join('\n')
}
