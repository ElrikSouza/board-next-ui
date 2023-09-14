import { BoardEntryDTO } from "@/dtos";
import { BoardGridEntry } from "./boards.types";

const mapBoardsDTOToBoardGridEntry = (dto: BoardEntryDTO): BoardGridEntry => ({
  id: dto.id,
  title: dto.title,
});

export const BoardMappers = {
  mapBoardsDTOToBoardGridEntry,
};
