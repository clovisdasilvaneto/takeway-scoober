"use client";

import React from "react";
import { Box, Skeleton } from "@mui/material";

import { AttempWrapper } from "./styled";
import FabOption from "../FabOption";
import Output from "../Output";
import { getAttempVariant } from "./utils";

export interface AttempProps {
  isLocal: boolean;
  selectedOption: number;
  number: number;
  result: number;
}

function Attemp({ isLocal, selectedOption, number, result }: AttempProps) {
  const { Avatar, color, direction } = getAttempVariant(isLocal);

  return (
    <AttempWrapper direction={direction}>
      {Avatar}

      <Box display="flex" flexDirection="column" gap={1}>
        <FabOption color={color} label={selectedOption.toString()} />

        <Output
          value={`[ (${selectedOption} + ${number} )  / 3 ] = ${result}`}
        />
        <Output value={result.toString()} />
      </Box>
    </AttempWrapper>
  );
}

export default Attemp;
