"use client";

import { Fab, Palette, styled } from "@mui/material";

export const FabOptionContent = styled(Fab, {
  shouldForwardProp: (prop) => prop !== "colorVariant",
})<{ colorVariant: keyof Palette["primary"] }>`
  font-size: 24px;
  font-weight: 700;

  &&.Mui-disabled {
    background: ${({ colorVariant, theme }) =>
      theme.palette.primary[colorVariant]};
    color: ${({ theme }) => theme.palette.common.white};
  }
`;
