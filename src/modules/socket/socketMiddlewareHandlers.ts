import { toast } from "react-toastify";
import { setIsReady, setRoom } from "../gameInfo/gameInfo";
import { connectionEstablished, connectionLost } from "./socket";
import {
  MiddlewareHandlerParams,
  SocketEvents,
  initSocketActionPayload,
  onMessageEvent,
} from "./types";

export function initSocketHandler({
  socket,
  store,
  action,
}: MiddlewareHandlerParams<initSocketActionPayload, "socket/initSocket">) {
  socket.on(SocketEvents.CONNECT, () => {
    socket.emit(SocketEvents.LOGIN, {
      username: action.payload.username,
    });
  });

  socket.on(SocketEvents.MESSAGE, (params: onMessageEvent) => {
    if (params.socketId) {
      store.dispatch(connectionEstablished(params));
    } else if (params.room) {
      store.dispatch(setRoom(params.room));
    }
  });

  socket.on(SocketEvents.ON_READY, ({ state }: { state: boolean }) => {
    console.log("onReady", state);
    store.dispatch(setIsReady(state));
  });

  // handle all Error events
  socket.on(SocketEvents.ERROR, (error: { message: string }) => {
    // use sentry or something to handle errors
    console.error(error);

    toast.error(error.message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  });

  // Handle disconnect event
  socket.on(SocketEvents.DISCONNECT, (reason: string) => {
    // use sentry or something to handle errors
    console.error(reason);

    toast.error(reason, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    store.dispatch(connectionLost());
  });
}
