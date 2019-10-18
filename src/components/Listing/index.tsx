import React from 'react'

import { Container } from './styles'
import { IBook } from '#domainTypes'
import { TableColumn, TableCell } from '#components'
import { Link, withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

const headers = ['Título', 'Autor', 'Editora', 'Ano', 'Ações']

interface IOwnProps {
  books: IBook[]
}

type IProps = IOwnProps & RouteComponentProps

const ListingComp = ({ books, history }: IProps) => (
  <Container>
    {books.length === 0 ? (
      <div>Não há resultados</div>
    ) : (
      headers.map(header => (
        <TableColumn key={header}>
          <TableCell
            alignment={
              header === 'Ano'
                ? 'right'
                : header === 'Ações'
                ? 'center'
                : 'left'
            }
            fontSize='18px'
          >
            {header}
          </TableCell>
          {books.map(({ id, title, editor, author, year, ISBN }, index) => (
            <TableCell
              key={id}
              alignment={
                header === 'Ano'
                  ? 'right'
                  : header === 'Ações'
                  ? 'center'
                  : 'left'
              }
              padding='.3em'
              color={index % 2 === 0 ? 'white' : '#eee'}
            >
              {header === 'Título' ? (
                <>
                  <span>{title}</span>
                  <span>{`(${ISBN})`}</span>
                </>
              ) : header === 'Autor' ? (
                author
              ) : header === 'Editora' ? (
                editor
              ) : header === 'Ano' ? (
                year
              ) : (
                <Link to={`/book/${id}`}>detalhes</Link>
              )}
            </TableCell>
          ))}
        </TableColumn>
      ))
    )}
  </Container>
)

export const Listing = withRouter(ListingComp)
export default Listing
