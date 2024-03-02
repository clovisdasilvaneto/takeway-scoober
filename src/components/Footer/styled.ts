"use client";

import { Box, styled } from "@mui/material";

export const FooterWrapper = styled(Box)`
  padding: 1rem;
  width: 100%;
  background: ${({ theme }) => theme.palette.info.dark};
  display: flex;
  grid-column-gap: 0.8rem;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.values.md}px) {
    flex-direction: column;
  }
`;
