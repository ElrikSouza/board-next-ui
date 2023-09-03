import { Box, Input, InputProps, Typography } from "@mui/material";
import { FieldValues, useController } from "react-hook-form";
import { BaseControlledFieldProps } from "./controlled-input.type";

export type ControlledInputProps<TForm extends FieldValues> =
  BaseControlledFieldProps<TForm> & InputProps;

export function ControlledInput<TForm extends FieldValues>({
  name,
  control,
  ...props
}: ControlledInputProps<TForm>) {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });
  const { value, onBlur, onChange } = field;
  const errorMsg = error?.message;

  return (
    <Box sx={{ display: "flex", flexFlow: "column", width: "100%" }}>
      <Input
        {...{ ...props, value, onBlur, onChange }}
        sx={{ width: "100%" }}
        error={!!errorMsg}
      />
      {!!errorMsg && <Typography>{errorMsg}</Typography>}
    </Box>
  );
}
