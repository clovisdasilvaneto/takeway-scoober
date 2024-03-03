"use client";

import React from "react";
import { GameRoomsContainer } from "./styled";
import MenuItem from "../MenuItem";
import { Typography } from "@mui/material";
import { Room } from "@/providers/RoomsProvider/types";

interface GameRoomsProps {
  rooms: Room[];
  onRoomSelected: (room: Room) => void;
  selectedRoom?: string;
}

function GameRooms({ selectedRoom, rooms, onRoomSelected }: GameRoomsProps) {
  const handleRoomSelected = (room: Room) => () => {
    onRoomSelected(room);
  };

  return (
    <>
      <Typography fontSize={14} paragraph fontWeight={700} color="primary.dark">
        Choose your game room
      </Typography>

      <GameRoomsContainer>
        {rooms.map((room) => (
          <MenuItem
            selected={selectedRoom === room.name}
            key={`${room.name}-${room.id}`}
            label={room.name}
            onClick={handleRoomSelected(room)}
          />
        ))}
      </GameRoomsContainer>
    </>
  );
}

export default GameRooms;
