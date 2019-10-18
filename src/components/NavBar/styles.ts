import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface IIsScrolled {
  isScrolled: boolean
}

export const NavStyled = styled.header<IIsScrolled>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 80px;
  z-index: 2;
  transition: all 0.3s;
  background: rgb(246, 247, 248);
  display: grid;
  grid-template-columns: 5em auto 5em;
  align-content: center;
  border-bottom: 1px solid lightgray;
  padding: 0 1em;
  ${props =>
    props.isScrolled &&
    `
      background: #fff;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px 0px;
    `};
`

export const Logo = styled(Link)`
  text-decoration: none;
  color: #a78be9;
  font-size: 1em;
  font-weight: bolder;
  align-self: center;
`

export const SearchBarWrapper = styled.div`
  padding: 0.5em;
  border-radius: 0.2em;
  display: flex;
  align-items: center;
  height: 50px;
  background: rgba(200, 200, 200, 0.1);
`

interface ISearchBarIcon {
  hide: boolean
}
export const SearchBarIcon = styled.img<ISearchBarIcon>`
  height: 1em;
  width: 1em;
  margin: 0 0.5em;
  transition: all 0.5s;
  opacity: 0.5;
  ${({ hide }) =>
    hide &&
    `
    opacity: 0;
    width: 0;
    height: 0;
  `}
`

export const SearchField = styled.input`
  background: transparent;
  opacity: 0.8;
  outline: none;
  width: 100%;
  padding: 0.5em 1em;
  font-size: 18px;
  border: none;
  height: 40px;
`
