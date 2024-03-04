"use client";

import { Box, styled } from "@mui/material";

export const GamePlayWrapper = styled(Box)`
  padding: 2rem;
  display: flex;
  position: relative;
  justify-content: space-between;
  flex-direction: column;
  background: ${({ theme }) => theme.palette.common.white};
`;

export const GamePlayContainer = styled(Box)`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  flex-direction: column;
  padding-bottom: 4rem;
  position: relative;
  gap: 1rem;
  z-index: 1;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.values.md}px) {
    gap: 3rem;
  }
`;
