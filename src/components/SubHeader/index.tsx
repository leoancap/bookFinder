import React from 'react'
import { connect } from 'react-redux'

import { IAppState } from '#storeTypes'
import { Container, Heading, MaxResultsCounter } from './styles'
import { IntervalCalendar } from '#components'
import { IBook } from '#domainTypes'
import { RouteComponentProps, withRouter } from 'react-router'
import {
  filterBooksByPagination,
  filterBooksByEndDate,
  filterBooksByStartDate,
  filterBooksByText,
} from '#selectors'

interface IStateToProps {
  books: IBook[]
  resultsAmount: number
}

type IProps = IStateToProps & RouteComponentProps

function SubHeaderComp({ resultsAmount, location: { pathname } }: IProps) {
  return (
    pathname === '/' && (
      <Container>
        <Heading>Filtar ano de publicação:</Heading>
        <IntervalCalendar></IntervalCalendar>
        <MaxResultsCounter>{resultsAmount} resultados</MaxResultsCounter>
      </Container>
    )
  )
}

const mapStateToProps = ({
  booksReducer: { books },
  filtersReducer: { textSearch, startDate, endDate, page },
}: IAppState): IStateToProps => ({
  books,
  resultsAmount: filterBooksByEndDate(
    filterBooksByStartDate(filterBooksByText(books, textSearch), startDate),
    endDate
  ).length,
})

export const SubHeader = connect(
  mapStateToProps,
  null
  // @ts-ignore
)(withRouter(SubHeaderComp))
export default SubHeader
