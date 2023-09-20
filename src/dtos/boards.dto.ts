export interface BoardEntryDTO {
  id: string;
  title: string;
}

export interface BoardFullDTO {
  id: string;
  title: string;
  columns: BoardColumnDTO[];
}

export interface CreateBoardDTO {
  title: string;
}

export interface CreateBoardColumnDTO {
  title: string;
}

export interface BoardColumnDTO {
  id: string;
  title: string;
  cards: BoardCardShortDTO[];
}

export interface BoardCardShortDTO {
  id: string;
  title: string;
  description?: string;
}

export interface CreateCardDTO {
  title: string;
  description?: string;
}
