"use client";

import { Box, styled } from "@mui/material";
import { motion } from "framer-motion";

export const GamePlayWrapper = styled(Box)`
  max-height: calc(100vh - 9.75rem);
  overflow: hidden;
  position: relative;
  background: ${({ theme }) => theme.palette.common.white};
`;

export const GamePlayContainer = styled(Box)`
  display: block;
  padding-bottom: 4rem;
  position: relative;
  z-index: 1;
  height: calc(100vh - 19rem);
  overflow-x: hidden;
  overflow-y: auto;

  > div {
    margin-top: 2rem;
  }
`;

export const GamePlayEndSelectRoom = styled(motion.div)`
  position: absolute;
  width: 100%;
  top: 2rem;
`;
