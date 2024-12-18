import { MenuItem } from "@mui/material";
import React from "react";

import { AppInput, AppInputProps } from "./app-input";

type Option = {
  value: string;
  label?: string;
};

export type AppSelectProps = AppInputProps & {
  multiple?: boolean;
  options: Option[];
};

export const AppSelect: React.FC<AppSelectProps> = ({
  name,
  label,
  multiple,
  options,
  helperText,
  placeholder,
  ...props
}) => {
  return (
    <AppInput
      select
      name={name}
      label={label}
      error={!!props.error}
      helperText={helperText}
      defaultValue={multiple ? [] : ""}
      {...props}
      slotProps={{
        ...(props.slotProps ?? {}),
        select: {
          multiple,
          displayEmpty: true,
          ...(props.slotProps?.select ?? {}),
        },
      }}
    >
      {placeholder && (
        <MenuItem value="" disabled>
          {placeholder}
        </MenuItem>
      )}

      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label || option.value}
        </MenuItem>
      ))}
    </AppInput>
  );
};
