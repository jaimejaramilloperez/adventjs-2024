/**
 * @typedef {Record<string, number>} GiftsCount
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
export function fixGiftList (received, expected) {
  const expectedGifts = {}
  const receivedGifts = {}

  for (const gift of expected) {
    expectedGifts[gift] ??= 0
    expectedGifts[gift] += 1
  }

  for (const gift of received) {
    receivedGifts[gift] ??= 0
    receivedGifts[gift] += 1
  }

  const missing = {}
  const extra = {}

  for (const [key, value] of Object.entries(receivedGifts)) {
    const extraCount = value - (expectedGifts[key] ?? 0)

    if (extraCount > 0) {
      extra[key] = extraCount
    }
  }

  for (const [key, value] of Object.entries(expectedGifts)) {
    const missingCount = value - (receivedGifts[key] ?? 0)

    if (missingCount > 0) {
      missing[key] = missingCount
    }
  }

  return { missing, extra }
}
