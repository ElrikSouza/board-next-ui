"use client";

import { AuthFormAction } from "../../components/AuthActions";

export interface SignUpFormActionsProps {
  isSubmitDisabled: boolean;
  onSubmit: () => void;
}

export function SignUpFormActions({
  isSubmitDisabled,
  onSubmit,
}: SignUpFormActionsProps) {
  return (
    <AuthFormAction
      {...{ isSubmitDisabled, onSubmit }}
      linkTo="/auth/login"
      linkLbl="Log in"
      submitLbl="Sign Up"
    />
  );
}
