"use client";

import { Fab, styled } from "@mui/material";

export const FabButtonWrapper = styled(Fab)`
  font-size: 18px;
  font-weight: 700;
  background: ${({ theme }) => theme.palette.common.white};
  color: ${({ theme }) => theme.palette.primary.main};
`;
