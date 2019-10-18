/**
 * Mock Books
 */
const { random, commerce, lorem, date, name } = require('faker')
const makeList = len => new Array(len).fill(null)

export function createBook(i) {
  return {
    id: random.number().toString(),
    title: commerce.productName(),
    ISBN: random.number({
      min: 1000000000000,
      max: 9999999999999,
    }),
    author: name.firstName(),
    editor: commerce.department(),
    year: date.past(100).getFullYear(),
    language: commerce.productName(),
    dimensions: {
      width: 40,
      height: 50,
      depth: 50,
    },
    weightInGrams: random.number({ min: 40, max: 70 }),
  }
}

export const fullDB = makeList(100).map((_, i) => createBook(i))
