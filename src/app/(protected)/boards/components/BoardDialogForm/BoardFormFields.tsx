import { ControlledInput } from "@/components";
import { Control } from "react-hook-form";
import { BoardFormValues } from "./boards.form";

export interface BoardFormFieldsProps {
  control: Control<BoardFormValues>;
}

export function BoardFormFields({ control }: BoardFormFieldsProps) {
  return (
    <>
      <ControlledInput control={control} name="title" label="Title" />
    </>
  );
}
