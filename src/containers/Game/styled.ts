"use client";

import { Box, styled } from "@mui/material";

export const GameBox = styled(Box)`
  padding: 0 1rem;
  max-width: 1108px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  gap: 1rem;
  grid-template-columns: 249px auto;
  flex: 1;

  > div:first-of-type {
    padding-top: 1.3rem;
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.values.md}px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }
`;
