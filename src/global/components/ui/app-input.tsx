import { TextField, TextFieldProps } from "@mui/material";

export type AppInputProps = TextFieldProps;

export function AppInput(props: TextFieldProps) {
  return <TextField {...props} />;
}
