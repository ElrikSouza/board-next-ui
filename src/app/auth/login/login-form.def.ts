import * as yup from "yup";
import { baseAuthSchema } from "../auth-base-schema";

export interface LoginFormValues {
  email: string;
  password: string;
}

export const loginFormSchema = yup.object(baseAuthSchema);
