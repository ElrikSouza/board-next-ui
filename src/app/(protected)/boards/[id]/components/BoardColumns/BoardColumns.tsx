import { TBoardColumn } from "../../../boards.types";
import { BoardColumnToggleForm } from "../BoardColumnForm/BoardColumnToggleForm";
import { BoardColumnFormValues } from "../BoardColumnForm/useBoardColumnForm";
import { CardFormValues } from "../CardForm/useCardForm";
import { BoardColumnGridStyleContainer } from "./BoardColumnGridStyleContainer";
import { OneBoardColumn } from "./OneBoardColumn";

export interface BoardColumnsProps {
  columns?: TBoardColumn[];
  onCreateColumn: (column: BoardColumnFormValues) => void;
  onSubmitCard: (params: { card: CardFormValues; columnId: string }) => void;
}

export function BoardColumns({
  columns,
  onCreateColumn,
  onSubmitCard,
}: BoardColumnsProps) {
  return (
    <BoardColumnGridStyleContainer>
      {columns?.map((column) => (
        <OneBoardColumn
          column={column}
          key={column.id}
          onSubmitCard={onSubmitCard}
        />
      ))}

      <BoardColumnToggleForm submitColumnForm={onCreateColumn} />
    </BoardColumnGridStyleContainer>
  );
}
