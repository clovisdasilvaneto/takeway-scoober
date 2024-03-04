import { Box, Typography, styled } from "@mui/material";

export const MatchBaseNumber = styled(Typography)<{ component: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
`;

export const GamePlayOverflowContainer = styled(Box)`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
