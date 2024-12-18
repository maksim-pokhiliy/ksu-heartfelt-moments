import { Components, CssVarsTheme, Theme } from "@mui/material";

export const MuiInputBase: Components<Theme & CssVarsTheme>["MuiInputBase"] = {
  styleOverrides: {
    input: ({ theme }) => ({
      ...theme.typography.body2,
    }),
  },
};
