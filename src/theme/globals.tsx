import { Global, css } from "@emotion/react";

const GlobalStyles = (
  <Global
    styles={() => css`
      html {
        height: 100%;
      }

      body {
        min-height: 100%;
        display: flex;
        flex-direction: column;
      }

      html,
      body {
        padding: 0;
        margin: 0;
        background-color: #f8f5f2;
      }

      * {
        box-sizing: border-box;
      }
    `}
  />
);

export default GlobalStyles;
