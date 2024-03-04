import { Box } from "@mui/material";
import React from "react";
import FabButon from "../FabButton";
import { GameOptionsWrapper } from "./styled";

interface GameOptionsProps {
  onOptionSelected: (option: string) => void;
}

const options = ["-1", "0", "+1"];

function GameOptions({ onOptionSelected }: GameOptionsProps) {
  const handleOptionSelected = (option: string) => () => {
    onOptionSelected(option);
  };

  return (
    <GameOptionsWrapper component="menu">
      {options.map((option, index) => (
        <FabButon
          key={`${option}-${index}`}
          label={option}
          onClick={handleOptionSelected(option)}
        />
      ))}
    </GameOptionsWrapper>
  );
}

export default GameOptions;
