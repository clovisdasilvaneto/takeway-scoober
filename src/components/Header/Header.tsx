import React from "react";
import { HeaderWrapper } from "./styled";
import { Box, Typography } from "@mui/material";
import { LogoIcon } from "../Icons";
import { createEntranceAnimation } from "@/theme/animations";

interface HeaderProps {
  description: string;
}

const headerAnimation = createEntranceAnimation("translateY(-3rem)");

function Header({ description }: HeaderProps) {
  return (
    <HeaderWrapper
      aria-label="scoober game header"
      animate="in"
      initial="out"
      variants={headerAnimation}
    >
      <LogoIcon />

      <Box>
        <Typography
          color="common.white"
          fontWeight={500}
          variant="h6"
          component="h1"
        >
          {description}
        </Typography>

        <Typography
          color="common.white"
          fontWeight={300}
          variant="body2"
          component="h3"
        >
          Win the game or win the job
        </Typography>
      </Box>
    </HeaderWrapper>
  );
}

export default Header;
