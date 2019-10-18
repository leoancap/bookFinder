import React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Cell, Container } from './styles'

interface IOwnProps {
  children: React.ReactNode
  color?: string
  alignment?: string
  padding?: string
  paddingLeft?: string
  fontSize?: string
}

type IProps = IOwnProps & RouteComponentProps

const TableCellComp = ({
  children,
  color = '#a78be9',
  alignment = 'left',
  padding = '.5em',
  paddingLeft = '.2em',
  fontSize = '16px',
}: IProps) => (
  <Container
    padding={padding}
    paddingLeft={paddingLeft}
    fontSize={fontSize}
    alignment={alignment}
    color={color}
  >
    <Cell>{children}</Cell>
  </Container>
)

export const TableCell = connect(
  null,
  null
)(withRouter(TableCellComp))
export default TableCell
