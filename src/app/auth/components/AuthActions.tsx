"use client";
import { Box, Button, Divider } from "@mui/material";
import Link from "next/link";

export interface AuthFormActionsProps {
  isSubmitDisabled: boolean;
  onSubmit: () => void;
  linkTo: string;
  linkLbl: string;
  submitLbl: string;
}

export function AuthFormAction({
  isSubmitDisabled,
  onSubmit,
  linkTo,
  submitLbl,
  linkLbl,
}: AuthFormActionsProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "column",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <Button disabled={isSubmitDisabled} onClick={onSubmit}>
        {submitLbl}
      </Button>

      <Divider>Or</Divider>

      <Link href={linkTo}>{linkLbl}</Link>
    </Box>
  );
}
