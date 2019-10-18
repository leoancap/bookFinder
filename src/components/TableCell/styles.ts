import styled from 'styled-components'

interface IColor {
  color: string
  alignment: string
  padding: string
  paddingLeft: string
  fontSize: string
}
export const Container = styled.div<IColor>`
  ${({ color, alignment, padding, paddingLeft, fontSize }) => `
    background: ${color};
    padding: ${padding};
    padding-left: ${paddingLeft};
    text-align: ${alignment};
    font-size: ${fontSize};
  `}
  border-top: 0.2px solid #777;
  border-right: 0.2px solid #777;
`

export const Cell = styled.span`
  text-decoration: none;
  color: #3f364d;
  padding: 0.1em;
  width: 85%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: grid;
  align-content: center;
  height: 2.2em;
`
