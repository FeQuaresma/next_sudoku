import { createGlobalStyle, css } from "styled-components";
import theme from "./theme";

export default createGlobalStyle<{ theme: typeof theme }>`
  ${({ theme }) => css`
    html {
        height: 100%;

        body {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          margin: 0;
          padding: 15px;
          background: ${theme.colors.background};
          color: ${theme.colors.black};
          font-family: sans-serif;
        }
      }
  `};
`;
