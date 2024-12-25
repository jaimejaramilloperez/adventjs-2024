/**
 * @param {string} code
 * @returns {number}
 */
export function execute (code) {
  const program = code.split('')
  let value = 0

  for (let i = 0; i < program.length; i++) {
    const command = program[i]

    if (command === '+') {
      value++
    } else if (command === '-') {
      value--
    } else if (command === '[') {
      const endOfLoop = program.indexOf(']', i)
      i = endOfLoop - 1
      value = 0
    } else if (command === '{' && value === 0) {
      const endOfCondition = program.indexOf('}', i)
      i = endOfCondition - 1
    }
  }

  return value
}
