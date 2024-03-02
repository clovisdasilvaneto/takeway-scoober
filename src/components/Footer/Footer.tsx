import React from "react";
import { Box, Typography } from "@mui/material";

import { FooterWrapper } from "./styled";
import JustTakeAwayIcon from "../Icons/JustTakeAwayIcon";

function Footer() {
  return (
    <FooterWrapper component="footer">
      <JustTakeAwayIcon />

      <Box display="flex" alignItems="center" gap={10}>
        <Typography color="common.white" fontWeight={300} variant="caption">
          Cookie statement
        </Typography>

        <Typography color="common.white" fontWeight={300} variant="caption">
          © 2021 Takeaway.com
        </Typography>
      </Box>
    </FooterWrapper>
  );
}

export default Footer;
