import React, { useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { fetchBooks } from '#actions'
import { Paginator, Listing, Loading, TryAgainMessage } from '#components'
import { LoadingStatus } from '#constants'
import { IBook } from '#domainTypes'
import {
  filterBooksByText,
  filterBooksByStartDate,
  filterBooksByEndDate,
  filterBooksByPagination,
} from '#selectors'
import { IAppActions, IAppState } from '#storeTypes'
import { Container } from './styles'

interface IDispatchToProps {
  fetchBooksDispatch: () => void
}

interface IStateToProps {
  filteredBooks: IBook[]
  error: boolean
  loading: boolean
}

type IProps = IDispatchToProps & IStateToProps

function HomePage({
  error,
  fetchBooksDispatch,
  filteredBooks,
  loading,
}: IProps) {
  useLayoutEffect(() => {
    fetchBooksDispatch()
  }, [fetchBooksDispatch])

  if (error) {
    return <TryAgainMessage />
  }

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Listing books={filteredBooks} />
      <Paginator></Paginator>
    </Container>
  )
}

const mapStateToProps = ({
  booksReducer: { books, loadingStatus },
  filtersReducer: { textSearch, startDate, endDate, page },
}: IAppState): IStateToProps => {
  const filteredBooks = filterBooksByPagination(
    filterBooksByEndDate(
      filterBooksByStartDate(filterBooksByText(books, textSearch), startDate),
      endDate
    ),
    page
  )
  console.log(page)
  return {
    filteredBooks,
    loading: loadingStatus === LoadingStatus.LOADING,
    error: loadingStatus === LoadingStatus.ERROR,
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, IAppActions>
): IDispatchToProps => ({
  fetchBooksDispatch: bindActionCreators(fetchBooks, dispatch),
})

export const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
export default Home
