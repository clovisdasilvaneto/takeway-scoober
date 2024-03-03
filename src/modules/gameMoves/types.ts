interface Move {
  number: number;
  isFirst: boolean;
}

export interface IAttemp extends Move {
  user: string;
  selectedNumber: number;
  isCorrectResult: boolean;
}

export type sendNumberPayload = { number: number; selectedNumber: number };
