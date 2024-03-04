"use client";

import { styled } from "@mui/material";
import { motion } from "framer-motion";

export const GameBox = styled(motion.section)`
  padding: 0 1rem;
  max-width: 1108px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  gap: 1rem;
  grid-template-columns: 249px auto;
  flex: 1;

  > div:first-of-type {
    padding-top: 1.3rem;
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.values.md}px) {
    grid-template-columns: auto;
    grid-template-rows: 230px auto;
  }
`;
