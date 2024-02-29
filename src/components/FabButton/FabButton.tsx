import React from "react";
import { FabButtonWrapper } from "./styled";

interface FabButtonProps {
  label: string;
}

function FabButton({ label }: FabButtonProps) {
  return <FabButtonWrapper>{label}</FabButtonWrapper>;
}

export default FabButton;
