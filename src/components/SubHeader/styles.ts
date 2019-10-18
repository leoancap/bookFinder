import styled from 'styled-components'

export const Container = styled.header`
  position: fixed;
  top: 80px;
  right: 0;
  left: 0;
  height: 80px;
  z-index: 2;
  transition: all 0.3s;
  background: rgb(246, 247, 248);
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  align-content: center;
  border-bottom: 1px solid lightgray;
  padding: 0 1em;
`

export const Heading = styled.span`
  white-space: nowrap;
  padding-right: 0.5em;
`

export const MaxResultsCounter = styled.span`
  white-space: nowrap;
  margin-left: auto;
`
