import React from "react";
import { FabOptionContent } from "./styled";
import { Palette } from "@mui/material";

export type FabColor = keyof Omit<Palette["primary"], "contrastText">;

interface FabOptionProps {
  label: string;
  color: FabColor;
}

function FabOption({ color, label }: FabOptionProps) {
  return (
    <FabOptionContent disabled color="primary" colorVariant={color}>
      {label}
    </FabOptionContent>
  );
}

export default FabOption;
