"use client";
import { AuthFormAction } from "../../components/AuthActions";

export interface LoginFormActionsProps {
  isSubmitDisabled: boolean;
  onSubmit: () => void;
}

export function LoginFormActions({
  isSubmitDisabled,
  onSubmit,
}: LoginFormActionsProps) {
  return (
    <AuthFormAction
      {...{ isSubmitDisabled, onSubmit }}
      linkTo="/auth/signup"
      linkLbl="Sign up"
      submitLbl="Log in"
    />
  );
}
