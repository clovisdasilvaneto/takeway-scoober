"use client";

import { Box, styled } from "@mui/material";
import { AttempDirection } from "./types";

export const AttempWrapper = styled(Box)<{ direction: AttempDirection }>`
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: 40px 198px;
  direction: ${({ direction }) => direction};
`;
