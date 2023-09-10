"use client";
import { appColors } from "@/app/colors";
import { Box, Button, Divider, Typography } from "@mui/material";
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
        gap: ".5rem",
        alignItems: "center",
      }}
    >
      <Button
        disabled={isSubmitDisabled}
        onClick={onSubmit}
        variant="contained"
        color="primary"
        fullWidth
      >
        {submitLbl}
      </Button>

      <Divider>Or</Divider>

      <Typography
        {...{ component: Link, href: linkTo }}
        variant="button"
        color={appColors.secondary}
      >
        {linkLbl}
      </Typography>
    </Box>
  );
}
