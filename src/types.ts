export type Vote = {
  name: string;
  votes: {
    wins: number;
    losses: number;
  };
};
