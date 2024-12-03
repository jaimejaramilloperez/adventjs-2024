/**
* @typedef {Object} Toy
* @property {string} name
* @property {number} quantity
* @property {string} category
*/

/**
 * @param {Toy[]} inventory
 * @returns {object}
 */
export function organizeInventory (inventory) {
  if (inventory.length === 0) return {}

  const groups = {}

  for (const toy of inventory) {
    const { name, quantity, category } = toy
    groups[category] ??= {}
    groups[category][name] ??= 0
    groups[category][name] += quantity
  }

  return groups
}
