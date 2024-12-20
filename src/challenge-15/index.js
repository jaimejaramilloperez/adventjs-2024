/**
  * @param {Object[]} data
  * @returns {string}
  */
export function drawTable (data) {
  if (!data || data.length === 0) return ''

  const lines = 3
  const tableHight = data.length + lines
  const table = []

  table.push('+')
  table.push('|')
  table.push('+')

  for (let i = 0; i < tableHight - 3; i++) {
    table.push('|')
  }

  table.push('+')

  for (const key of Object.keys(data[0])) {
    const columnData = data.map((obj) => obj[key].toString())
    const maxLineSize = Math.max(key.length, ...columnData.map((data) => data.length))

    const keySentenceCase = key.slice(0, 1).toUpperCase() + key.slice(1)
    const line = `${'-'.repeat(maxLineSize + 2)}+`

    table[0] += line
    table[1] += ` ${keySentenceCase.padEnd(maxLineSize, ' ')} |`
    table[2] += line

    for (let i = 0; i < columnData.length; i++) {
      table[i + 3] += ` ${columnData[i].padEnd(maxLineSize, ' ')} |`
    }

    table[tableHight] += line
  }

  return table.join('\n')
}
