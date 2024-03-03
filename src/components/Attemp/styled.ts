"use client";

import { Box, styled } from "@mui/material";
import { AttempDirection } from "./types";

export const AttempWrapper = styled(Box)<{ direction: AttempDirection }>`
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: ${({ direction }) =>
    direction === "ltr" ? "40px 198px" : "198px 40px"};

  ${({ direction }) =>
    direction === "rtl" &&
    ` justify-content: flex-end;
  
    > svg {
      grid-column-start: 2;
      grid-column-end: 3;
    }

    > div {
      grid-row-start: 1;
      align-items: flex-end;

      div {
        width: 100%;
      }
    }
  `}
`;
