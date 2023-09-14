import * as yup from "yup";
export interface BoardFormValues {
  title: string;
}

export const boardFormSchema = yup.object({
  title: yup
    .string()
    .required()
    .max(30, "Board title should be at most 30 characters long"),
});
