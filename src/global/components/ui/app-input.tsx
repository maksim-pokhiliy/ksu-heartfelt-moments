import { TextField, TextFieldProps } from "@mui/material";
import { Field, FieldProps } from "formik";

export type AppInputProps = TextFieldProps & {
  name: string;
};

export function AppInput({ name, helperText, ...restProps }: AppInputProps) {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <TextField
          {...field}
          error={!!meta.error && meta.touched}
          helperText={meta.error && meta.touched ? meta.error : helperText}
          {...restProps}
        />
      )}
    </Field>
  );
}
