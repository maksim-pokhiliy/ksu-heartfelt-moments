import { MenuItem } from "@mui/material";
import React from "react";

import { AppInput, AppInputProps } from "./app-input";

type Option = {
  value: string;
  label?: string;
};

export type AppSelectProps = AppInputProps & {
  options: Option[];
};

export const AppSelect: React.FC<AppSelectProps> = ({ label, options, placeholder, ...props }) => {
  return (
    <AppInput
      select
      label={label}
      error={!!props.error}
      defaultValue=""
      {...props}
      slotProps={{
        ...(props.slotProps ?? {}),
        select: {
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
