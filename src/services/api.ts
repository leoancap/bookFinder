import axios from 'axios'
import { fullDB, createBook } from '../utils/mockData'

// const dev = process.env.NODE_ENV !== 'production'
// const apiUrl = dev ? 'http://localhost:3000' : 'https://supero.now.sh'
// const apiUrl = 'http://localhost:3000'
// const baseURL = axios.create({
//   baseURL: `${apiUrl}/api`,
// })

export const api = {
  fetchBooks: () => {
    // const { data } = await axios.get('/api/books')
    // return data
    return new Promise(res => {
      // mocked delay
      setTimeout(() => {
        res(fullDB)
      }, 400)
    })
  },
  fetchBook: (bookID: string) => {
    // const { data } = await baseURL.get('/book/' + bookID)
    // return data
    return new Promise(res => {
      // mocked delay
      setTimeout(() => {
        res(createBook(bookID))
      }, 400)
    })
  },
}
