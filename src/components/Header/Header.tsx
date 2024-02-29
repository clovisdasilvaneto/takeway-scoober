import React from "react";
import { HeaderWrapper } from "./styled";
import { Box, Typography } from "@mui/material";
import { LogoIcon } from "../Icons";

interface HeaderProps {
  username: string;
}

function Header({ username }: HeaderProps) {
  return (
    <HeaderWrapper component="header">
      <LogoIcon />

      <Box>
        <Typography
          color="common.white"
          fontWeight={500}
          variant="h6"
          component="h1"
        >
          Playing with {username}
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
