import { Box } from "@mui/material";
import React from "react";
import FabButon from "../FabButton";

interface GameOptionsProps {
  onOptionSelected: (option: string) => void;
}

const options = ["-1", "0", "+1"];

function GameOptions({ onOptionSelected }: GameOptionsProps) {
  const handleOptionSelected = (option: string) => () => {
    onOptionSelected(option);
  };

  return (
    <Box component="menu" display="flex" justifyContent="center" gap={4}>
      {options.map((option, index) => (
        <FabButon
          key={`${option}-${index}`}
          label={option}
          onClick={handleOptionSelected(option)}
        />
      ))}
    </Box>
  );
}

export default GameOptions;
