import { BaseDialogProps } from "@/app/util.types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useCreateBoard } from "../../hooks/useCreateBoard";
import { BoardFormFields } from "./BoardFormFields";
import { useBoardForm } from "./useBoardForm";

export interface BoardDialogFormProps extends BaseDialogProps {}

export function BoardDialogForm({ open, onClose }: BoardDialogFormProps) {
  const {
    control,
    formState: { isDirty },
    hasError,
    handleSubmit,
  } = useBoardForm();

  const { mutateAsync } = useCreateBoard();

  const submitFn = handleSubmit(async (data) => {
    await mutateAsync(data);
    onClose();
  });

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Create a new board</DialogTitle>

      <DialogContent>
        <BoardFormFields control={control} />
      </DialogContent>

      <DialogActions>
        <Button
          onClick={submitFn}
          variant="text"
          disabled={hasError || !isDirty}
        >
          Create Board
        </Button>
      </DialogActions>
    </Dialog>
  );
}
