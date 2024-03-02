"use client";

import React, { createContext } from "react";
import { Room } from "./types";

export const RoomsContext = createContext<Room[]>([]);

interface RoomsProviderProps {
  rooms: Room[];
  children: React.ReactNode;
}

function RoomsProvider({ rooms, children }: RoomsProviderProps) {
  return (
    <RoomsContext.Provider value={rooms}>{children}</RoomsContext.Provider>
  );
}

export default RoomsProvider;
