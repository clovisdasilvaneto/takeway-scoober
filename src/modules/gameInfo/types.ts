export enum TurnStates {
  WAIT = "wait",
  PLAY = "play",
}

export type changeTurnPayload = {
  user: string;
  state: TurnStates;
};

export type finishGamePayload = { isWinner: boolean };
