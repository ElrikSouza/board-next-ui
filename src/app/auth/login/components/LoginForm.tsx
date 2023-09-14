"use client";

import { AuthApi } from "@/board-api";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useLoginForm } from "../hooks/useLoginForm";
import { LoginFormActions } from "./LoginFormActions";
import { LoginFormFields } from "./LoginFormFields";

export function LoginForm() {
  const { control, hasError, handleSubmit } = useLoginForm();
  const router = useRouter();

  const submitFn = handleSubmit(async (data) => {
    await AuthApi.login(data);
    router.push("/boards");
  });

  return (
    <Box sx={{ display: "flex", flexFlow: "column", gap: "1.5rem" }}>
      <Box sx={{ display: "flex", flexFlow: "column", gap: "1rem" }}>
        <LoginFormFields control={control} />
      </Box>

      <LoginFormActions isSubmitDisabled={hasError} onSubmit={submitFn} />
    </Box>
  );
}
