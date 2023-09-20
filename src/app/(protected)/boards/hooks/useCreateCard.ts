import { BoardAPI } from "@/board-api/boardApi";
import { BoardCardShortDTO, BoardFullDTO } from "@/dtos";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ONE_BOARD_KEY } from "./useOneBoard";

const appendCardToBoard = (
  board: BoardFullDTO,
  columnId: string,
  card: BoardCardShortDTO
): BoardFullDTO => {
  const columns = board.columns;
  const newColumns = columns.map((col) => {
    if (col.id === columnId) {
      return { ...col, cards: [card, ...col.cards] };
    } else {
      return col;
    }
  });

  return { ...board, columns: newColumns };
};

export function useCreateCard({ boardId }: { boardId?: string } = {}) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: BoardAPI.createBoardCard,
    onSuccess: ({ data }, { columnId }) => {
      if (!boardId) return;
      const board = queryClient.getQueryData<BoardFullDTO>(
        ONE_BOARD_KEY(boardId)
      );
      if (!board) return;

      const newBoard = appendCardToBoard(board, columnId, data);
      queryClient.setQueryData(ONE_BOARD_KEY(boardId), newBoard);
    },
  });

  return mutation;
}
