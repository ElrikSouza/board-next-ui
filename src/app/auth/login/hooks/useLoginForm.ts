import { useAppForm } from "@/hooks";
import { LoginFormValues, loginFormSchema } from "../login-form.def";

const defaultValues: LoginFormValues = { email: "", password: "" };

export function useLoginForm() {
  return useAppForm<LoginFormValues>({
    schema: loginFormSchema,
    defaultValues,
  });
}
