import { BoardAPI } from "@/board-api/boardApi";
import { useQuery } from "@tanstack/react-query";

export const ONE_BOARD_KEY = (boardId: string) => ["boards", boardId];

export function useOneBoard({ boardId }: { boardId: string }) {
  const { data } = useQuery(
    ONE_BOARD_KEY(boardId),
    () => BoardAPI.getOneBoard(boardId),
    { suspense: true }
  );

  return data;
}
