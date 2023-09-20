"use client";

import { ControlledInput } from "@/components";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import {
  BoardColumnFormValues,
  useBoardColumnForm,
} from "./useBoardColumnForm";

export interface BoardColumnFormModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (formValues: BoardColumnFormValues) => void;
}

export function BoardColumnFormModal({
  onClose,
  open,
  onSubmit,
}: BoardColumnFormModalProps) {
  const {
    control,
    hasError,
    handleSubmit,
    formState: { isDirty },
  } = useBoardColumnForm();

  const submitFn = handleSubmit((data) => {
    onSubmit(data);
    onClose();
  });

  return (
    <Dialog {...{ onClose, open }}>
      <DialogTitle>Create column</DialogTitle>

      <DialogContent>
        <ControlledInput
          variant="outlined"
          control={control}
          label="Board title"
          name="title"
        />
      </DialogContent>

      <DialogActions>
        <Button
          variant="text"
          disabled={!isDirty || hasError}
          onClick={submitFn}
        >
          Create column
        </Button>
      </DialogActions>
    </Dialog>
  );
}
