import { BoardAPI } from "@/board-api/boardApi";
import { useQuery } from "@tanstack/react-query";

export const BOARDS_KEY = ["boards"];

export function useBoards() {
  const { data: boards } = useQuery(BOARDS_KEY, {
    queryFn: BoardAPI.getBoards,
    suspense: true,
  });

  return boards;
}
