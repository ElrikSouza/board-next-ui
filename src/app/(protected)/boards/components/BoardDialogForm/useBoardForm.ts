import { useAppForm } from "@/hooks";
import { BoardFormValues, boardFormSchema } from "./boards.form";

const defaultValues = { title: "" };

export function useBoardForm() {
  const form = useAppForm<BoardFormValues>({
    schema: boardFormSchema,
    defaultValues,
  });

  return form;
}
