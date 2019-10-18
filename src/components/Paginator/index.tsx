import React from 'react'
import { ThunkDispatch } from 'redux-thunk'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Container, PaginatorButton } from './styles'
import { IAppState, IAppActions } from '#storeTypes'
import { setPage } from '#actions'
import { IBook } from '#domainTypes'
import {
  filterBooksByEndDate,
  filterBooksByPagination,
  filterBooksByStartDate,
  filterBooksByText,
} from '#selectors'

const makeList = (len: number) => new Array(len).fill(null).map((_, i) => i + 1)

interface IDispatchToProps {
  setPageDispatch: (page: number) => void
}
interface IStateToProps {
  page: number
  resultsAmount: number
  books: IBook[]
}

type IProps = IDispatchToProps & IStateToProps

function PaginatorComp({
  books,
  page,
  setPageDispatch,
  resultsAmount,
}: IProps) {
  const pages = makeList(Math.ceil(resultsAmount / 10))
  return (
    <Container>
      <PaginatorButton
        onClick={() => {
          setPageDispatch(page < 10 ? 0 : page - 10)
        }}
        isActive={true}
      >{`<<`}</PaginatorButton>
      <PaginatorButton
        onClick={() => {
          setPageDispatch(page < 1 ? 0 : page - 1)
        }}
        isActive={true}
      >{`<`}</PaginatorButton>
      {pages.slice(page, page + 5).map(thisPage => (
        <PaginatorButton
          key={thisPage}
          onClick={() => {
            setPageDispatch(thisPage)
          }}
          isActive={true}
          isSelected={thisPage === page + 1}
        >
          {thisPage}
        </PaginatorButton>
      ))}
      {page < pages.length - 6 && (
        <>
          <PaginatorButton
            onClick={() => {}}
            isActive={true}
          >{`...`}</PaginatorButton>
          <PaginatorButton
            onClick={() => {
              setPageDispatch(pages.length)
            }}
            isActive={true}
          >
            {pages.length - 1}
          </PaginatorButton>
        </>
      )}
      <PaginatorButton
        onClick={() => {
          setPageDispatch(page > pages.length - 2 ? pages.length - 1 : page + 1)
        }}
        isActive={true}
      >{`>`}</PaginatorButton>
      <PaginatorButton
        onClick={() => {
          setPageDispatch(
            page > pages.length - 11 ? pages.length - 1 : page + 10
          )
        }}
        isActive={true}
      >{`>>`}</PaginatorButton>
    </Container>
  )
}

const mapStateToProps = ({
  booksReducer: { books },
  filtersReducer: { page, textSearch, endDate, startDate },
}: IAppState): IStateToProps => ({
  page,
  books,
  resultsAmount: filterBooksByEndDate(
    filterBooksByStartDate(filterBooksByText(books, textSearch), startDate),
    endDate
  ).length,
})

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, IAppActions>
): IDispatchToProps => ({
  setPageDispatch: bindActionCreators(setPage, dispatch),
})

export const Paginator = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginatorComp)
export default Paginator
