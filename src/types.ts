export type Vote = {
  name: string | "fake"
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
