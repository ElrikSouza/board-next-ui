import { useOpenable } from "@/hooks/useDialog";
import { AddCircle } from "@mui/icons-material";
import { Box, Button, Grow } from "@mui/material";
import { ColumnExpandedForm } from "./ColumnExpandedForm";
import { BoardColumnFormValues } from "./useBoardColumnForm";

export interface BoardColumnToggleFormProps {
  submitColumnForm: (column: BoardColumnFormValues) => void;
}

export function BoardColumnToggleForm({
  submitColumnForm,
}: BoardColumnToggleFormProps) {
  const formOpenState = useOpenable();
  return (
    <Box>
      {!formOpenState.open && (
        <Grow in={!formOpenState.open}>
          <Button
            variant="contained"
            startIcon={<AddCircle />}
            onClick={formOpenState.handleOpen}
          >
            Create Column
          </Button>
        </Grow>
      )}

      {formOpenState.open && (
        <Grow in={formOpenState.open}>
          <Box>
            <ColumnExpandedForm
              onClose={formOpenState.handleClose}
              submitColumnForm={submitColumnForm}
            />
          </Box>
        </Grow>
      )}
    </Box>
  );
}
