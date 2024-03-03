"use client";

import GameRooms from "@/components/GameRooms";
import { attempToChooseRoom, selectRoom } from "@/modules/gameInfo/gameInfo";
import { RoomsContext } from "@/providers/RoomsProvider/RoomsProvider";
import { Room } from "@/providers/RoomsProvider/types";
import { Box } from "@mui/material";
import { useSession } from "next-auth/react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Rooms = () => {
  const rooms = useContext(RoomsContext);
  const session = useSession();
  const selectedRoom = useSelector(selectRoom);
  const dispatch = useDispatch();

  const onRoomSelected = (room: Room) => {
    if (!session.data?.user?.name || selectedRoom) {
      toast.error("Please finish your match before leaving the room.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      return;
    }

    dispatch(attempToChooseRoom({ room, username: session.data?.user?.name }));
  };

  return (
    <Box component="aside" pt={3} aria-label="choose your room">
      <GameRooms
        selectedRoom={selectedRoom}
        rooms={rooms}
        onRoomSelected={onRoomSelected}
      />
    </Box>
  );
};

export default Rooms;
