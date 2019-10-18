import React from 'react';

import { Container, ErrorMessageStyled } from './styles';

export function TryAgainMessage() {
  return (
    <Container>
      <ErrorMessageStyled>
        There was an error.
        <br />
        <br />
        Try again!
      </ErrorMessageStyled>
    </Container>
  );
}

export default TryAgainMessage;
