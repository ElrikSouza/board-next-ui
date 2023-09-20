import { BoardAPI } from "@/board-api/boardApi";
import { BoardFullDTO } from "@/dtos";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ONE_BOARD_KEY } from "./useOneBoard";

export function useCreateColumn() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: BoardAPI.createBoardColumn,
    onSuccess: ({ data }, { boardId }) => {
      queryClient.setQueryData<BoardFullDTO>(
        ONE_BOARD_KEY(boardId),
        (board) => {
          if (!board) return undefined;
          return {
            ...board,
            columns: [data, ...board.columns],
          };
        }
      );
    },
  });

  return mutation;
}
