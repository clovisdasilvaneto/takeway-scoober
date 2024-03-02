"use client";

import { Box, styled } from "@mui/material";

export const HeaderWrapper = styled(Box)`
  padding: 1rem;
  width: 100%;
  background: ${({ theme }) => theme.palette.secondary.main};
  display: flex;
  grid-column-gap: 0.8rem;
  align-items: center;
  box-shadow: 0px 1px 8px 0px #1d21371f, 0px 3px 4px 0px #1d213724,
    0px 3px 3px 0px #1d21371f;
  z-index: 2;
`;
