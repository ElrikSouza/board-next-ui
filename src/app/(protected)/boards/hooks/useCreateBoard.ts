import { BoardAPI } from "@/board-api/boardApi";
import { BoardEntryDTO } from "@/dtos";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BOARDS_KEY } from "./useBoards";

export function useCreateBoard() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: BoardAPI.createBoard,
    onSuccess: ({ data }) => {
      queryClient.setQueryData<BoardEntryDTO[]>(BOARDS_KEY, (cachedData) => {
        if (!cachedData) return undefined;
        return [data, ...cachedData];
      });
    },
  });

  return mutation;
}
