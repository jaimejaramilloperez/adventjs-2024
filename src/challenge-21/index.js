/**
 * @param {{ value: string; left: any; right: any }} tree
 * @returns {number}
 */
export function treeHeight (tree) {
  if (tree === null) return 0
  return 1 + Math.max(treeHeight(tree.left), treeHeight(tree.right))
}
