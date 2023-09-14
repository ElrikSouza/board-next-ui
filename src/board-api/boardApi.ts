import { BoardEntryDTO, CreateBoardDTO } from "@/dtos";
import { api } from "./api";

const getBoards = (cookies = {}) =>
  api
    .get<BoardEntryDTO[]>("/boards", { headers: cookies })
    .then((res) => res.data);

const createBoard = (boardData: CreateBoardDTO) =>
  api.post<BoardEntryDTO>("/boards", boardData);

export const BoardAPI = {
  getBoards,
  createBoard,
};
