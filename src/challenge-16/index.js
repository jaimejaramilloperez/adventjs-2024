/**
 * @param {string} s - snow
 * @returns {string}
 */
export function removeSnow (s) {
  const result = []

  for (const char of s) {
    if (result.length > 0 && result.at(-1) === char) {
      result.pop()
    } else {
      result.push(char)
    }
  }

  return result.join('')
}
