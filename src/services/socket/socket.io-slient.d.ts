// because the version of socket.io we need to declare the module here
declare module "socket.io-client";

type Socket = {
  emit: (eventName: string, data?: any) => void;
  on: (eventName: string, fn?: any) => void;
};
