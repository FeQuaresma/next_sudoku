import React, { FC, useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'

import { IReducer, selectBlock } from 'reducers'
import { INDEX, N } from 'typings'

import { Container } from './styles'
import { type } from 'os'

interface IProps {
  moveDown: () => void
  moveUp: () => void
  moveLeft: () => void
  moveRight: () => void
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
  moveDown,
  moveUp,
  moveLeft,
  moveRight,
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
      <input
        value={state.value === 0 ? '' : state.value}
        onKeyDown={(e) => {
          switch (e.key) {
            case 'ArrowUp':
              moveUp()
              break
            case 'ArrowDown':
              moveDown()
              break
            case 'ArrowRight':
              moveRight()
              break
            case 'ArrowLeft':
              moveLeft()
              break
          }
          if (Number(e.key)) {
            console.log(e.key)
          }
        }}
        ref={inputRef}
      />
    </Container>
  )
}

export default Block
