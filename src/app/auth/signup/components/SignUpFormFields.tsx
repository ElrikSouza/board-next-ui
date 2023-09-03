import { ControlledInput } from "@/components";
import { Control } from "react-hook-form";
import { SignUpFormValues } from "../signup-form.def";

export interface SignUpFormFieldsProps {
  control: Control<SignUpFormValues>;
}

export function SignUpFormFields({ control }: SignUpFormFieldsProps) {
  return (
    <>
      <ControlledInput
        placeholder="Full name"
        control={control}
        name="fullName"
      />

      <ControlledInput
        placeholder="Email"
        control={control}
        name="email"
        type="email"
      />

      <ControlledInput
        placeholder="Password"
        control={control}
        name="password"
        type="password"
      />
    </>
  );
}
