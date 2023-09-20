import { appColors } from "@/app/colors";
import { ControlledInput } from "@/components";
import { AddCircle, Close } from "@mui/icons-material";
import { Box, Button, IconButton } from "@mui/material";
import { CardFormValues, useCardForm } from "./useCardForm";

export interface CardExpandedFormProps {
  onSubmitCard: (card: CardFormValues) => void;
  onClose: () => void;
}

export function CardExpandedForm({
  onSubmitCard,
  onClose,
}: CardExpandedFormProps) {
  const {
    control,
    handleSubmit,
    hasError,
    formState: { isDirty },
  } = useCardForm();

  const submitFn = handleSubmit(onSubmitCard);

  return (
    <Box sx={{ display: "flex", flexFlow: "column", gap: ".5rem" }}>
      <ControlledInput control={control} name="title" label="Card title" />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="text"
          onClick={submitFn}
          startIcon={<AddCircle />}
          disabled={!isDirty || hasError}
          sx={{ flex: "1", color: appColors.textBrightAlt }}
        >
          Create Card
        </Button>

        <IconButton onClick={onClose} sx={{ flex: "0 0 auto" }}>
          <Close />
        </IconButton>
      </Box>
    </Box>
  );
}
