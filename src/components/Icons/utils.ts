"use client";

import { keyframes, styled } from "@mui/material";

const drawLogo = (color: string, strokeColor: string) => keyframes`
  from {
    stroke-dashoffset: 187px;
  }
  90% {
    fill: transparent;
    strokeWidth: 1px;
  }
  to {
    fill: ${color};
    stroke-width: 1px;
    stroke-dashoffset: 0;
    stroke: ${strokeColor};
  }
`;

export const AnimatedIcon = styled("svg")<{
  infinite?: boolean;
  duration?: number;
  color: string;
}>`
  max-width: 100%;

  path {
    fill: transparent;
    stroke-width: 1px;
    stroke: ${({ theme }) => theme.palette.common.white};
    stroke-dasharray: 187px;
    stroke-dashoffset: 187px;
    animation: ${({ theme, color }) =>
        drawLogo(theme.palette.common.white, color)}
      ${({ duration = 2 }) => duration}s ease-out
      ${({ infinite }) => (infinite ? `infinite alternate` : `1 forwards`)};
  }
`;
