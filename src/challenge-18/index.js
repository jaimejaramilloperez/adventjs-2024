/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */
export function findInAgenda (agenda, phone) {
  if (agenda.length === 0 || phone.length === 0) return null

  const agendaLines = agenda.split('\n')
  const matches = []

  for (const line of agendaLines) {
    if (line.includes(phone)) {
      const nameMatch = line.match(/<([\w\s-]+)>/)
      const addressMatch = line.match(/(?<=^|\s)([\w\s-]+)(?=$|\s)/)
      matches.push({ name: nameMatch[1], address: addressMatch[1].trim() })
    }
  }

  return matches.length === 1 ? matches[0] : null
}
