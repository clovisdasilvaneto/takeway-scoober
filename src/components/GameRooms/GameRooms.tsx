"use client";

import React from "react";
import { GameRoomsContainer } from "./styled";
import MenuItem from "../MenuItem";
import { Typography } from "@mui/material";
import { Room } from "@/providers/RoomsProvider/types";
import { createEntranceAnimation } from "@/theme/animations";
import { motion } from "framer-motion";

const roomItemAnimation = createEntranceAnimation("translateX(-2rem)");

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
        {rooms.map((room, index) => (
          <motion.div
            key={`${room.name}-${room.id}`}
            animate="in"
            initial="out"
            transition={{ delay: (index ? index / 3 : index) + 0.3 }}
            variants={roomItemAnimation}
          >
            <MenuItem
              selected={selectedRoom === room.name}
              label={room.name}
              onClick={handleRoomSelected(room)}
            />
          </motion.div>
        ))}
      </GameRoomsContainer>
    </>
  );
}

export default GameRooms;
