import { Global, css } from "@emotion/react";

const GlobalStyles = (
  <Global
    styles={() => css`
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
