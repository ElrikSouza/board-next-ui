import { useAppForm } from "@/hooks";
import * as yup from "yup";

export interface BoardColumnFormValues {
  title: string;
}

export interface UseBoardColumnFormParams {
  defaultValues: Partial<BoardColumnFormValues>;
}

const boardColumnSchema = yup.object({
  title: yup
    .string()
    .required()
    .max(50, "The column title should be at most 50 characters long"),
});

const defaultFormVals: Partial<BoardColumnFormValues> = { title: "" };

export function useBoardColumnForm(
  { defaultValues }: UseBoardColumnFormParams = {
    defaultValues: defaultFormVals,
  }
) {
  const form = useAppForm<BoardColumnFormValues>({
    defaultValues,
    schema: boardColumnSchema,
  });

  return form;
}
