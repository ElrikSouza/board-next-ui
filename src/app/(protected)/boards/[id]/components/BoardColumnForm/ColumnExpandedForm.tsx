import { appColors } from "@/app/colors";
import { ControlledInput } from "@/components";
import { AddCircle, Close } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import {
  BoardColumnFormValues,
  useBoardColumnForm,
} from "./useBoardColumnForm";

export interface ColumnExpandedFormProps {
  submitColumnForm: (column: BoardColumnFormValues) => void;
  onClose: () => void;
}

export function ColumnExpandedForm({
  submitColumnForm,
  onClose,
}: ColumnExpandedFormProps) {
  const { handleSubmit, control, hasError } = useBoardColumnForm();

  const submitFn = handleSubmit((data) => {
    submitColumnForm(data);
    onClose();
  });

  return (
    <Box
      sx={{
        padding: "1.5rem",
        backgroundColor: appColors.columnBg,
        display: "flex",
        flexFlow: "column",
        gap: "1rem",
        borderRadius: "12px",
      }}
    >
      <Typography color="Scrollbar">Create column</Typography>

      <ControlledInput
        control={control}
        name="title"
        label="Column title"
        sx={{ color: "white" }}
        color="success"
      />

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="text"
          startIcon={<AddCircle />}
          disabled={hasError}
          onClick={submitFn}
        >
          Create Column
        </Button>

        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </Box>
    </Box>
  );
}
