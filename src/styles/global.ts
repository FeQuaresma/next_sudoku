import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
  ${(props => css`
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
          background: radial-gradient(#282c34cc, #282c34);
          color: ${props.theme.};
          font-family: sans-serif;
        }
      }
  `)};
`;
