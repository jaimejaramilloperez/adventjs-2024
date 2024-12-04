/**
 * @param {number} height
 * @param {string} ornament
 * @returns {string}
 */
export function createXmasTree (height, ornament) {
  const TRUNK_SYMBOL = '#'
  const tree = []

  for (let i = 0; i < height; i++) {
    const underscores = '_'.repeat(height - i - 1)
    const ornaments = ornament.repeat(i)

    const leftHalf = [underscores, ornaments].join('')
    const rightHalf = [ornaments, underscores].join('')

    tree.push([leftHalf, ornament, rightHalf].join(''))
  }

  const trunkUnderscores = '_'.repeat(height - 1)
  const halfTrunk = [trunkUnderscores, TRUNK_SYMBOL, trunkUnderscores].join('')

  const trunk = [halfTrunk, halfTrunk].join('\n')
  tree.push(trunk)

  return tree.join('\n')
}
