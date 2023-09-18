export type BoardGridEntry = {
  id: string;
  title: string;
};

export type BoardColumn = {
  id: string;
  title: string;
  cards: Record<string, unknown>;
};
