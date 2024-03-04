"use client";

import { keyframes, styled } from "@mui/material";

const drawLogo = (color: string) => keyframes`
  from {
    stroke-dashoffset: 187px;
  }
  90% {
    fill: transparent;
    strokeWidth: 1px;
  }
  to {
    fill: ${color};
    strokeWidth: 0;
    stroke-dashoffset: 0;
  }
`;

export const AnimatedIcon = styled("svg")<{
  infinite?: boolean;
  duration?: number;
}>`
  max-width: 100%;

  path {
    fill: transparent;
    strokeidthw: 1px;
    stroke: ${({ theme }) => theme.palette.common.white};
    stroke-dasharray: 187px;
    stroke-dashoffset: 187px;
    animation: ${({ theme }) => drawLogo(theme.palette.common.white)}
      ${({ duration = 2 }) => duration}s ease-out
      ${({ infinite }) => (infinite ? `infinite alternate` : `1 forwards`)};
  }
`;
