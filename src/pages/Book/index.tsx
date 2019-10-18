import React, { useLayoutEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { Loading, TryAgainMessage } from '#components'
import { IBook } from '#domainTypes'
import { api } from '#services'
import { BookTitle, Container } from './styles'

type IProps = RouteComponentProps<{
  bookID: string
}>

function BookPage({
  match: {
    params: { bookID },
  },
  location: { state },
}: IProps) {
  const [book, setBook] = useState<IBook | null>(null)

  const [error, setError] = useState<boolean>(false)

  useLayoutEffect(() => {
    api
      .fetchBook(bookID)
      .then(setBook)
      .catch(_ => setError(true))
  }, [bookID])

  if (error) {
    return <TryAgainMessage />
  }

  return (
    <Container>
      {book === null ? (
        <Loading />
      ) : (
        <BookTitle>
          <code>{JSON.stringify(book, null, 2)}</code>
        </BookTitle>
      )}
    </Container>
  )
}

export const Book = BookPage
export default Book
