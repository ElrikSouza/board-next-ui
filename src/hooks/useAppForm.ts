import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, UseFormProps, useForm } from "react-hook-form";
import type { ObjectSchema } from "yup";

export interface UseAppFormParams<T extends FieldValues = FieldValues>
  extends Omit<UseFormProps<T>, "resolver"> {
  schema: ObjectSchema<T>;
}

export function useAppForm<TValues extends FieldValues>({
  schema,
  ...params
}: UseAppFormParams<TValues>) {
  const form = useForm<TValues>({
    delayError: 500,
    mode: "onChange",
    ...params,
    resolver: yupResolver(schema) as any,
  });

  const hasError = Object.keys(form.formState.errors).length > 0;

  return {
    ...form,
    hasError,
  };
}
