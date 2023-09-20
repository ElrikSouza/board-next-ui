import { useAppForm } from "@/hooks";
import * as yup from "yup";

export interface CardFormValues {
  title: string;
}

const cardFormSchema = yup.object({
  title: yup
    .string()
    .required()
    .max(50, "Card title can be at most 50 characters long"),
});

export function useCardForm() {
  return useAppForm<CardFormValues>({
    schema: cardFormSchema,
    defaultValues: { title: "" },
  });
}
