/**
 * @param {string} filename
 * @returns {string}
 */
export function decodeFilename (filename) {
  const regex = /[\d]+_(?<filename>[a-zA-Z_-]+\.[a-zA-Z]+)\.[\w-]+/
  return filename.match(regex)?.groups.filename ?? ''
}
