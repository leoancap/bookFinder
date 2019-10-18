import styled from 'styled-components'

export const Container = styled.div`
  align-self: flex-start;
  margin-right: auto;
  .startDate {
    width: 5em;
    padding: 0.5em;
    font-size: 0.5em;
    margin-right: 0.3em;
  }
  .endDate {
    width: 5em;
    padding: 0.5em;
    font-size: 0.5em;
    margin-right: 0.3em;
  }
`

export const DatesInputWrapper = styled.div`
  display: grid;
  align-content: center;
  grid-auto-flow: column;
  grid-gap: 0.5em;
`

export const Divider = styled.span`
  margin: 0 0.5em;
`

export const StartDate = styled.div`
  display: flex;
  align-items: center;
`

export const EndDate = styled.div`
  display: flex;
  align-items: center;
`
