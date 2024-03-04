import { LogoIcon } from "@/components/Icons";
import { selectRoom } from "@/modules/gameInfo/gameInfo";
import { createEntranceAnimation } from "@/theme/animations";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

function SelectGameRoom() {
  const selectedRoom = useSelector(selectRoom);

  if (Boolean(selectedRoom))
    return (
      <Box textAlign="center">
        <LogoIcon infinite />
        <Typography>Waiting for opponent</Typography>
      </Box>
    );

  return (
    <Typography maxWidth="60%" margin="0 auto" variant="h6" textAlign="center">
      To start the game, please select a room by clicking on the menu in the
      left side...
    </Typography>
  );
}

export default SelectGameRoom;
