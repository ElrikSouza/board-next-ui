import * as yup from "yup";

export const baseAuthSchema = {
  email: yup
    .string()
    .email()
    .required("Email is required")
    .max(120, "Email field can be up to 120 characters long"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password field has to be at least 8 characters long")
    .max(70, "Password field can be up to 70 characters long"),
};
