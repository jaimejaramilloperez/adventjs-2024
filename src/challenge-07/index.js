/**
 * @param {string} packages
 * @returns {string}
 */
export function fixPackages (packages) {
  const regex = /\(([^()]+)\)/
  const replacer = (_, group) => group.split('').reverse().join('')

  while (regex.test(packages)) {
    packages = packages.replace(regex, replacer)
  }

  return packages
}
