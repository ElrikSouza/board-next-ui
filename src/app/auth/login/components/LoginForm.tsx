"use client";

import { Box } from "@mui/material";
import { useLoginForm } from "../hooks/useLoginForm";
import { LoginFormActions } from "./LoginFormActions";
import { LoginFormFields } from "./LoginFormFields";

export function LoginForm() {
  const { control, hasError, handleSubmit } = useLoginForm();

  const submitFn = handleSubmit(console.log);

  return (
    <Box sx={{ display: "flex", flexFlow: "column", gap: "1.5rem" }}>
      <Box sx={{ display: "flex", flexFlow: "column", gap: "1rem" }}>
        <LoginFormFields control={control} />
      </Box>

      <LoginFormActions isSubmitDisabled={hasError} onSubmit={submitFn} />
    </Box>
  );
}
