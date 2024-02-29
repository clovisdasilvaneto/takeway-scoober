import React from "react";
import { AttempWrapper } from "./styled";
import { Box } from "@mui/material";
import FabOption from "../FabOption";
import Output from "../Output";
import { getAttempVariant } from "./utils";

interface AttempProps {
  isLocal: boolean;
}

function Attemp({ isLocal }: AttempProps) {
  const { Avatar, color, direction } = getAttempVariant(isLocal);

  return (
    <AttempWrapper direction={direction}>
      {Avatar}

      <Box display="flex" flexDirection="column" gap={1}>
        <FabOption color={color} label="1" />

        <Output value="[ ( -1 + 19 )  / 3 ] = 6" />
        <Output value="6" />
      </Box>
    </AttempWrapper>
  );
}

export default Attemp;
