export type Vote = {
  name: string;
  votes: number;
};

export type TResults = {
  best: Vote[];
  worst: Vote[];
};

export type Uncertain<T> =
  | T
  | {
      error: string;
    };
