/**
 * @param {{ value: string; left: any; right: any }} tree1
 * @param {{ value: string; left: any; right: any }} tree2
 * @returns {[boolean, string | null]}
 */
export function isTreesSynchronized (tree1, tree2) {
  function areTreesMirrored (node1, node2) {
    if (node1 == null && node2 == null) return true
    if (node1 == null || node2 == null) return false
    if (node1.value !== node2.value) return false

    return (
      areTreesMirrored(node1.left, node2.right) &&
      areTreesMirrored(node1.right, node2.left)
    )
  }

  const areMirrored = areTreesMirrored(tree1, tree2)
  const rootNode = tree1?.value ?? null

  return [areMirrored, rootNode]
}
