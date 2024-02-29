import { Box } from "@mui/material";
import React from "react";
import FabButon from "../FabButton";

function GameOptions() {
  return (
    <Box display="flex" justifyContent="center" gap={4}>
      <FabButon label="-1" />
      <FabButon label="0" />
      <FabButon label="+1" />
    </Box>
  );
}

export default GameOptions;
