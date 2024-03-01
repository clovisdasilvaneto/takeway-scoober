import { keyframes, styled } from "@mui/material";

const drawLogo = keyframes`
  from {
    stroke-dashoffset: 187px;
  }
  90% {
    fill: transparent;
    stroke-width: 1px;
  }
  to {
    fill: #fff;
    stroke-width: 0;
    stroke-dashoffset: 0;
  }
`;

export const AnimatedIcon = styled("svg")<{ duration?: number }>`
  max-width: 100%;

  .animatedPath {
    fill: transparent;
    stroke-width: 1px;
    stroke: ${({ theme }) => theme.palette.common.white};
    stroke-dasharray: 187px;
    stroke-dashoffset: 187px;
    animation: ${drawLogo} ${({ duration = 2 }) => duration}s ease-out 1
      forwards;
  }
`;
