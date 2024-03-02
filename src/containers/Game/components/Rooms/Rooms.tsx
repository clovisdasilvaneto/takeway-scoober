"use client";

import GameRooms from "@/components/GameRooms";
import { RoomsContext } from "@/providers/RoomsProvider/RoomsProvider";
import { Box } from "@mui/material";
import { useContext } from "react";

const Rooms = () => {
  const rooms = useContext(RoomsContext);
  const onRoomSelected = () => {};

  return (
    <Box>
      <GameRooms rooms={rooms} onRoomSelected={onRoomSelected} />
    </Box>
  );
};

export default Rooms;
