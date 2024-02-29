import React from "react";
import { OutputBox } from "./styled";
import { Typography } from "@mui/material";

interface OutputProps {
  value: string;
}

function Output({ value }: OutputProps) {
  return (
    <OutputBox>
      <Typography variant="caption">{value}</Typography>
    </OutputBox>
  );
}

export default Output;
