"use client";

import { Box, Theme, styled } from "@mui/material";

const getSelectedStyles = (theme: Theme) => `
  box-shadow: inset 0 -80px 0 0 ${theme.palette.primary.main};

  p {
    color: ${theme.palette.common.white};
  }

  path {
    fill: ${theme.palette.common.white};
  }
`;

export const MenuItemContainer = styled(Box)<{ selected?: boolean }>`
  background: ${({ theme }) => theme.palette.common.white};
  padding: 1.6rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease-out;
  box-shadow: inset 0 0 0 0 ${({ theme }) => theme.palette.primary.main};
  cursor: pointer;

  p,
  path {
    transition: all 0.2s ease-out;
  }

  &:hover {
    ${({ theme }) => getSelectedStyles(theme)}
  }

  ${({ selected, theme }) => selected && getSelectedStyles(theme)}

  @media only screen and (max-width: ${({ theme }) =>
    theme.breakpoints.values.md}px) {
    padding: 1rem 0.6rem;
  }
`;
