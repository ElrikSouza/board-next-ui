"use client";
import { ControlledInput } from "@/components";
import { Control } from "react-hook-form";
import { LoginFormValues } from "../login-form.def";

export interface LoginFormFieldsProps {
  control: Control<LoginFormValues>;
}

export function LoginFormFields({ control }: LoginFormFieldsProps) {
  return (
    <>
      <ControlledInput
        control={control}
        label="Email"
        name="email"
        type="email"
      />

      <ControlledInput
        control={control}
        label="Password"
        name="password"
        type="password"
      />
    </>
  );
}
