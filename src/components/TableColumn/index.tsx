import React from 'react'

import { Container } from './styles'

interface IProps {
  children: React.ReactNode
}

export function TableColumn({ children }: IProps) {
  return <Container>{children}</Container>
}
