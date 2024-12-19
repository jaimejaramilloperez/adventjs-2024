/**
 * @param {string[]} instructions
 * @returns {number | undefined}
 */
export function compile (instructions) {
  const records = new Map()
  let index = 0

  const COMMANDS = {
    MOV: (x, y) => {
      const value = !isNaN(x) ? Number(x) : records.get(x) ?? 0
      records.set(y, value)
    },
    INC: (x) => {
      const value = records.get(x) ?? 0
      records.set(x, value + 1)
    },
    DEC: (x) => {
      const value = records.get(x) ?? 0
      records.set(x, value - 1)
    },
    JMP: (x, y) => {
      const value = records.get(x) ?? 0
      if (value === 0) {
        index = Number(y) - 1
      }
    }
  }

  for (index = 0; index < instructions.length; index++) {
    const [command, x, y] = instructions[index].split(' ')
    COMMANDS[command](x, y)
  }

  return records.get('A')
}
