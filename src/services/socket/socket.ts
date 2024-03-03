"use client";

import io, { Socket } from "socket.io-client";

export interface SocketInterface {
  socket: Socket;
}

class SocketConnection implements SocketInterface {
  public socket: Socket;
  public socketEndpoint = process.env.NEXT_PUBLIC_WEBSOCKET_URL;

  // The constructor will initialize the Socket Connection
  constructor() {
    if (!this.socketEndpoint)
      throw new Error(
        "Please defined the NEXT_PUBLIC_WEBSOCKET_URL in your .env",
      );

    this.socket = io(this.socketEndpoint, {
      rejectUnauthorized: false,
    });
  }
}

let socketConnection: SocketConnection | undefined;

// The SocketFactory is responsible for creating and
// returning a single instance of the SocketConnection class
// Implementing the singleton pattern
class SocketFactory {
  public static create(): SocketConnection {
    if (!socketConnection) {
      socketConnection = new SocketConnection();
    }
    return socketConnection;
  }
}

export default SocketFactory;
