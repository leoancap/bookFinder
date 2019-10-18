import styled from 'styled-components'

export const Container = styled.div`
  margin: auto;
  display: flex;
`

interface IIsActive {
  isActive: boolean
  isSelected?: boolean
}
export const PaginatorButton = styled.div<IIsActive>`
  border: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2em;
  margin: 0.2em;
  width: 2em;
  cursor: not-allowed;
  opacity: 0.3;
  ${({ isSelected }) =>
    isSelected &&
    `
    background: #555;
    color: #bbb
  `}
  ${({ isActive }) =>
    isActive &&
    `
    cursor: pointer;
    opacity: 1;
  `}
`
