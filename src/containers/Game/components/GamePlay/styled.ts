"use client";

import { Box, styled } from "@mui/material";

export const GamePlayWrapper = styled(Box)`
  padding: 2rem;
  display: flex;
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
  gap: 1rem;
`;
