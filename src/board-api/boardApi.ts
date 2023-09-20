import {
  BoardCardShortDTO,
  BoardColumnDTO,
  BoardEntryDTO,
  BoardFullDTO,
  CreateBoardDTO,
  CreateCardDTO,
} from "@/dtos";
import { api } from "./api";

const getBoards = (cookies = {}) =>
  api
    .get<BoardEntryDTO[]>("/boards", { headers: cookies })
    .then((res) => res.data);

const getOneBoard = (boardId: string, cookies = {}) =>
  api
    .get<BoardFullDTO>(`/boards/${boardId}`, { headers: cookies })
    .then((res) => res.data);

const createBoard = (boardData: CreateBoardDTO) =>
  api.post<BoardEntryDTO>("/boards", boardData);

type TCreateBoardColumn = { boardId: string; column: CreateBoardDTO };
const createBoardColumn = ({ boardId, column }: TCreateBoardColumn) =>
  api.post<BoardColumnDTO>(`/boards/${boardId}/board-columns`, column);

type TCreateBoardCard = { columnId: string; card: CreateCardDTO };
const createBoardCard = ({ columnId, card }: TCreateBoardCard) =>
  api.post<BoardCardShortDTO>(`/board-columns/${columnId}/cards`, card);

export const BoardAPI = {
  getBoards,
  createBoard,
  createBoardColumn,
  createBoardCard,
  getOneBoard,
};
