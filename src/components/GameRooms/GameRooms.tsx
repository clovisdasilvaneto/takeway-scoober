"use client";

import React from "react";
import { GameRoomsContainer } from "./styled";
import MenuItem from "../MenuItem";
import { Typography } from "@mui/material";
import { Room } from "@/providers/RoomsProvider/types";

interface GameRoomsProps {
  rooms: Room[];
  onRoomSelected: () => void;
}

function GameRooms({ rooms, onRoomSelected }: GameRoomsProps) {
  return (
    <>
      <Typography fontSize={14} paragraph fontWeight={700} color="primary.dark">
        Choose your game room
      </Typography>

      <GameRoomsContainer>
        {rooms.map((room) => (
          <MenuItem
            key={`${room.name}-${room.id}`}
            label={room.name}
            onClick={onRoomSelected}
          />
        ))}
      </GameRoomsContainer>
    </>
  );
}

export default GameRooms;
