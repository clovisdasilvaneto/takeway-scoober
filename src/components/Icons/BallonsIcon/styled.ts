"use client";

import { Box, keyframes, styled } from "@mui/material";

const flightBallon = keyframes`
  from {
    transform: translateY(3rem);
  }
  5%, 60% {
    opacity: 1
  }
  80% {
    opacity: 0
  }
`;

export const BallonBox = styled(Box)`
  position: relative;

  svg {
    position: absolute;
    opacity: 0;
    transform: translateY(-13rem);

    animation: ${flightBallon} infinite ease-out;
  }

  svg:first-of-type {
    top: -240px;
    left: -70px;
    animation-duration: 4s;
  }

  svg:nth-child(2) {
    left: -120px;
    top: -106px;
    animation-duration: 2s;
    animation-delay: 0.5s;
  }

  svg:nth-child(3) {
    left: 20px;
    top: -155px;
    animation-duration: 3s;
    animation-delay: 0.8s;
  }

  svg:nth-child(4) {
    left: -120px;
    top: -122px;
    animation-duration: 2.6s;
    animation-delay: 0.4s;
  }
`;
