import { useOpenable } from "@/hooks/useDialog";
import { AddCircle } from "@mui/icons-material";
import { Box, Button, Grow } from "@mui/material";
import { CardExpandedForm } from "./CardExpandedForm";
import { CardFormValues } from "./useCardForm";

export interface CardToggleFormProps {
  onSubmitCard: (card: CardFormValues) => void;
}

export function CardToggleForm({ onSubmitCard }: CardToggleFormProps) {
  const cardForm = useOpenable();

  return (
    <Box>
      {!cardForm.open && (
        <Grow in={!cardForm.open}>
          <Button startIcon={<AddCircle />} onClick={cardForm.handleOpen}>
            Create Card
          </Button>
        </Grow>
      )}
      {cardForm.open && (
        <Grow in={cardForm.open}>
          <Box sx={{ background: "red" }}>
            <CardExpandedForm
              onSubmitCard={onSubmitCard}
              onClose={cardForm.handleClose}
            />
          </Box>
        </Grow>
      )}
    </Box>
  );
}
