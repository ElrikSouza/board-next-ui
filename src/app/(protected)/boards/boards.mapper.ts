import { BoardEntryDTO } from "@/dtos";
import { TBoardGridEntry } from "./boards.types";

const mapBoardsDTOToBoardGridEntry = (dto: BoardEntryDTO): TBoardGridEntry => ({
  id: dto.id,
  title: dto.title,
});

export const BoardMappers = {
  mapBoardsDTOToBoardGridEntry,
};
