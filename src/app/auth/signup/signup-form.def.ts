import * as yup from "yup";
import { baseAuthSchema } from "../auth-base-schema";
export interface SignUpFormValues {
  email: string;
  password: string;
  fullName: string;
}

export const signUpSchema = yup.object({
  ...baseAuthSchema,
  fullName: yup
    .string()
    .required("Name is required")
    .min(2, "The user name must be at least 2 characters long"),
});
