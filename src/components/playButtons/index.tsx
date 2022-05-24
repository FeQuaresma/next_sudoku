import React, { FC, Children, useCallback, useEffect } from 'react'
import { Container, Buttons } from './styles'

const PlayButtons: FC = () => {

  return (
    <Container data-cy="buttons-container">
      <Buttons />
    </Container>
  )
}

export default PlayButtons