"use client";

import { AuthApi } from "@/board-api";
import { Box } from "@mui/material";
import { useSignUpForm } from "../hooks/useSignUpForm";
import { SignUpFormActions } from "./SignUpFormActions";
import { SignUpFormFields } from "./SignUpFormFields";

export function SignUpForm() {
  const { control, hasError, handleSubmit } = useSignUpForm();
  const submitFn = handleSubmit(async (data) => {
    await AuthApi.signUp(data);
  });

  return (
    <Box sx={{ display: "flex", flexFlow: "column", gap: "1.5rem" }}>
      <Box sx={{ display: "flex", flexFlow: "column", gap: "1rem" }}>
        <SignUpFormFields control={control} />
      </Box>

      <SignUpFormActions isSubmitDisabled={hasError} onSubmit={submitFn} />
    </Box>
  );
}
