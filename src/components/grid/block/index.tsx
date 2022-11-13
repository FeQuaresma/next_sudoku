import React, { FC, useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'

import { IReducer, selectBlock } from 'reducers'
import { INDEX, N } from 'typings'

import { Container } from './styles'

interface IProps {
  colIndex: INDEX
  rowIndex: INDEX
}

interface IState {
  isActive: boolean
  value: N
}

interface INumBlock {
  value?: string
}

const Block: FC<IProps> = ({
  colIndex,
  rowIndex,
}) => {
  const [numBlock, setNumBlock] = useState<INumBlock>()
  const state = useSelector<IReducer, IState>(
    ({ workingGrid, selectedBlock }) => ({
      isActive: selectedBlock
        ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
        : false,
      value: workingGrid ? workingGrid[rowIndex][colIndex] : 0,
    })
  )
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (state.isActive) {
      inputRef.current?.focus()
    }
  }, [state.isActive])

  function handleClick() {
    if (!state.isActive) dispatch(selectBlock([rowIndex, colIndex]))
  }

  return (
    <Container
      active={state.isActive}
      data-cy={`block-${rowIndex}-${colIndex}`}
      onClick={handleClick}
    >
      {state.value === 0 ? '' : state.value}
    </Container>
  )
}

export default Block
