import { createGlobalStyle, css } from 'styled-components'
import theme from './theme'

export default createGlobalStyle<{ theme: typeof theme }>`
  ${({ theme }) => css`
    html {
      height: 100%;

      body {
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 90%;
        margin: 0;
        padding: 15px;
        // background: ${theme.colors.background};
        color: ${theme.colors.black};
        font-family: sans-serif;
      }

      @keyframes gradient {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      input {
        border: none;
        background-image: none;
        background-color: transparent;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        outline: none;
        caret-color: transparent;
      }
    }
  `};
`
