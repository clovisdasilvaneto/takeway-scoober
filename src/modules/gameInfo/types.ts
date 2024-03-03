export enum TurnStates {
  WAIT = "wait",
  PLAY = "play",
}

export type changeTurnPayload = {
  user: string;
  state: TurnStates;
};
