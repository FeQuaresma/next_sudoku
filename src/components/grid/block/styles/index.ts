import styled, { css } from 'styled-components'

interface IProps {
  active?: boolean
}

export const Container = styled.div<IProps>`
  ${({ active, theme }) => css`
  
    align-items: center;
    background-color: ${active ? theme.colors.blue : theme.colors.white};
    border: solid 1px ${theme.colors.black};
    cursor: pointer;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    font-size: 20px;
    font-weight: bold;
    height: auto;
    justify-content: center;
    transition: ${theme.transition};
    user-select: none;
    max-width: 49px;
    max-height: 49px;

    &:before {
      padding-top: 100%;
      content: '';
      float: left;
    }

    &:hover {
      background-color: ${theme.colors.lightBlue};
    }

    input {
      max-width: 100%;
      max-height: 100%;
      font-size: inherit;
      font-weight: inherit;
      text-align: center;
    }
  `}
`