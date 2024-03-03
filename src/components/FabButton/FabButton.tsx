import React from "react";
import { FabButtonWrapper } from "./styled";

interface FabButtonProps {
  label: string;
  onClick: () => void;
}

function FabButton({ label, onClick }: FabButtonProps) {
  return <FabButtonWrapper onClick={onClick}>{label}</FabButtonWrapper>;
}

export default FabButton;
