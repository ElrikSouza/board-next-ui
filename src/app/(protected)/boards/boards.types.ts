export type TBoardGridEntry = {
  id: string;
  title: string;
};

export type TBoardColumn = {
  id: string;
  title: string;
  cards: TBoardCard[];
};

export type TBoardCard = {
  id: string;
  title: string;
  description?: string;
};
