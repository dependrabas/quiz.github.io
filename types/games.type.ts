export type Game = {
  id: number;
  cards: Card[];
};

export type Card = {
  id?: number;
  affirmation: string;
  answer: "left" | "right";
  revised: string;
  illustration: string;
};
