import { Control, FieldPath, FieldValues } from "react-hook-form";

export interface BaseControlledFieldProps<TForm extends FieldValues> {
  name: FieldPath<TForm>;
  control: Control<TForm>;
}
