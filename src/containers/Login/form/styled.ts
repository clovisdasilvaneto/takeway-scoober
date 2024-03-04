"use client";

import { motion } from "framer-motion";
import { Box, styled } from "@mui/material";

export const LoginBox = styled(Box)`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin: 0 auto;
  width: 100%;
  max-width: min(70vw, 600px);

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.values.md}px) {
    max-width: min(86vw, 600px);
  }
`;

export const InputBox = styled(motion.div)`
  width: 100%;
`;
