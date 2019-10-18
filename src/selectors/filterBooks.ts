import { IBook } from '../types/appTypes'

/** Returns an array of books based on the textValue given
 *
 * @param {books} [books]
 * @param {textSearch} [textSearch]
 */
export const filterBooksByText = (
  books: IBook[],
  textSearch: string
): IBook[] =>
  textSearch.length === 0
    ? books
    : books.filter(
        book =>
          (book.title &&
            book.title.toLowerCase().includes(textSearch.toLowerCase())) ||
          (book.author && book.author.includes(textSearch)) ||
          (book.ISBN && book.ISBN.toString().includes(textSearch))
      )

/** Returns an array of books based on the textValue given
 * @param {books} [books]
 * @param {startDate} [startDate]
 */
export const filterBooksByStartDate = (
  books: IBook[],
  startDate: Date | null
): IBook[] =>
  startDate ? books.filter(book => book.year >= startDate.getFullYear()) : books

/** Returns an array of books based on the textValue given
 * @param {books} [books]
 * @param {endDate} [endDate]
 */
export const filterBooksByEndDate = (
  books: IBook[],
  endDate: Date | null
): IBook[] =>
  endDate ? books.filter(book => book.year <= endDate.getFullYear()) : books

/** Returns an array of books based on the page given
 * @param {books} [books]
 * @param {page} [page]
 */
export const filterBooksByPagination = (
  books: IBook[],
  page: number
): IBook[] => books.slice(page * 10, page * 10 + 10)
