import { Components, CssVarsTheme, Theme } from "@mui/material";

export const MuiButton: Components<
  Omit<Theme, "components" | "palette"> & CssVarsTheme
>["MuiButton"] = {
  defaultProps: {
    disableElevation: true,
    variant: "contained",
  },
  styleOverrides: {
    root: {
      textTransform: "capitalize",
      boxSizing: "border-box",
    },
  },
  variants: [
    {
      props: { size: "small" },
      style: ({ theme }) => ({
        minHeight: theme.spacing(5),
        padding: `${theme.spacing(1.25)} ${theme.spacing(2)}`,
        boxSizing: "border-box",
      }),
    },
    {
      props: { size: "medium" },
      style: ({ theme }) => ({
        minHeight: theme.spacing(7),
        padding: `${theme.spacing(1.75)} ${theme.spacing(2)}`,
        boxSizing: "border-box",
      }),
    },
    {
      props: { size: "large" },
      style: ({ theme }) => ({
        minHeight: theme.spacing(7),
        padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
        boxSizing: "border-box",
      }),
    },
  ],
};
