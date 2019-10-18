// Global
import React from 'react'
// Local
import { Container } from './styles'

interface ILayout {
  children: React.ReactNode
}

export const Layout = ({ children }: ILayout) => (
  <Container>{children}</Container>
)
export default Layout
