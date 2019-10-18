import React, { useLayoutEffect, useEffect } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { setTextSearch } from '#actions'
import { useIsScrolled } from '#customHooks'
import { IAppActions, IAppState } from '#storeTypes'
import SearchIconSVG from './search.svg'
import {
  Logo,
  NavStyled,
  SearchBarIcon,
  SearchBarWrapper,
  SearchField,
} from './styles'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Button } from '#components'

interface IDispatchToProps {
  setTextSearchDispatch: (payload: string) => void
}

interface IStateToProps {
  textSearch: string
}

type IProps = IDispatchToProps & IStateToProps & RouteComponentProps

function NavBarComponent({
  textSearch,
  setTextSearchDispatch,
  location: { pathname },
}: IProps) {
  const [inputFocused, setInputFocused] = React.useState<boolean>(false)

  const isScrolled = useIsScrolled()

  useLayoutEffect(() => {
    if (textSearch) {
      setTextSearchDispatch('')
    }
  }, [pathname])

  return (
    <NavStyled isScrolled={isScrolled}>
      <Logo to='/'>SUPERO</Logo>
      {pathname === '/' ? (
        <SearchBarWrapper>
          <SearchBarIcon
            hide={textSearch.length > 0 || inputFocused}
            src={SearchIconSVG}
          />
          <SearchField
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            value={textSearch}
            placeholder='Busque livros pelo título, autor ou ISBN'
            onChange={({ target: { value } }) => setTextSearchDispatch(value)}
          />
        </SearchBarWrapper>
      ) : (
        <div />
      )}
      <Button label='Buscar' />
    </NavStyled>
  )
}

const mapStateToProps = ({
  filtersReducer: { textSearch },
}: IAppState): IStateToProps => ({
  textSearch,
})

const mapDispatchToProps = (
  dispatch: Dispatch<IAppActions>
): IDispatchToProps => ({
  setTextSearchDispatch: (textSearch: string) =>
    dispatch(setTextSearch(textSearch)),
})

export const NavBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavBarComponent))
export default NavBar
