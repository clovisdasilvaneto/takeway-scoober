import { Box, Button, styled } from "@mui/material";
import { motion } from "framer-motion";

export const EndGameWrapper = styled(motion.div)`
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`;

export const EndGameButton = styled(Button)`
  background: ${({ theme }) => theme.palette.common.white};
  max-width: 243px;
  height: 53px;
  border-radius: 2rem;
  text-transform: none;

  &:hover {
    background: ${({ theme }) => theme.palette.common.white};
  }
`;
