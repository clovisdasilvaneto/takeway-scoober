import { Middleware } from "redux";
import { initSocket } from "./socket";
import SocketFactory from "@/services/socket";
import type { SocketInterface } from "@/services/socket";
import { MiddlewareHandlerParams } from "./types";
import { initSocketHandler } from "./socketMiddlewareHandlers";

const handlers = [
  {
    action: initSocket,
    handler: initSocketHandler,
  },
];

const socketMiddleware: Middleware = (store) => {
  let socketInstance: SocketInterface;

  return (next) => (action) => {
    // Middleware logic for initializing the socket
    if (initSocket.match(action)) {
      if (!socketInstance && typeof window !== "undefined") {
        // Client-side-only code
        // Create/ Get Socket Socket
        socketInstance = SocketFactory.create();
      }
    }

    const actionHandler = handlers.find((handle) =>
      handle.action.match(action),
    );

    if (actionHandler)
      actionHandler.handler({
        socket: socketInstance.socket,
        store,
        action,
      } as MiddlewareHandlerParams<any, any>);

    next(action);
  };
};

export default socketMiddleware;
