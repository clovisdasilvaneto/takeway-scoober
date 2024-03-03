import { Room } from "@/providers/RoomsProvider/types";
import { SocketInterface } from "@/services/socket";
import { Store } from "@reduxjs/toolkit";

// message events
export type onMessageEvent = {
  socketId: string;
  message: string;
  room: string;
};

// actions payload
export type initSocketActionPayload = { username: string };

// middleware handler params
export type MiddlewareHandlerParams<T, R> = {
  socket: SocketInterface["socket"];
  store: Store;
  action: {
    payload: T;
    type: R;
  };
};

// enums
export enum SocketEvents {
  CONNECT = "connect",
  DISCONNECT = "disconnect",

  // Emit events
  LOGIN = "login",
  JOIN_ROOM = "joinRoom",
  LEAVE_ROOM = "leaveRoom",

  // On events
  MESSAGE = "message",
  ERROR = "notAllowedError",
  PRICE = "price",
  ON_READY = "onReady",
}
