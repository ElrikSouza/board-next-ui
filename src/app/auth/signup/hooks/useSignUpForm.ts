import { useAppForm } from "@/hooks";
import { SignUpFormValues, signUpSchema } from "../signup-form.def";

const defaultValues: SignUpFormValues = {
  email: "",
  password: "",
  fullName: "",
};

export function useSignUpForm() {
  return useAppForm<SignUpFormValues>({
    schema: signUpSchema,
    defaultValues,
  });
}
