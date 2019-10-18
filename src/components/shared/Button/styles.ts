import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import { IColor } from '#styledTypes'

const customCSSColor = css<IColor>`
  ${({ background, color }) => `
    background: ${background}
    color: ${color}
  `}
`

export const Container = styled.div`
  cursor: pointer;
  display: grid;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

export const LinkButton = styled(Link)<IColor>`
  white-space: nowrap;
  text-decoration: none;
  padding: 0.5em;
  max-height: 2.5em;
  border-radius: 0.3em;
  color: white;
  ${customCSSColor}
`

export const Label = styled.span``

export const SubmitButton = styled.button<IColor>`
  max-width: 10em;
  cursor: pointer;
  outline: none;
  font-size: 23px;
  font-weight: bold;
  padding: 0.5em;
  border-radius: 0.3em;
  max-width: 95%;
  ${customCSSColor}
`
