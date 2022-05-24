import styled, { css } from 'styled-components'

interface IProps {
  active?: boolean
}

export const Container = styled.div<IProps>`
  ${({ theme }) => css`
    background-color: white;
    height: 70px;
    width: auto;
    border-radius: 15px;
    padding: 10px;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
  `}
`

export const Buttons = styled.button<IProps>`
  ${({ theme }) => css`
    background-color: white;
    border: solid 2px black;
    height: 50px;
    width: 50px;
    border-radius: 100%;
    padding: 5px;

    &&:active {
      background-color: gray;
    }
  `}
`
