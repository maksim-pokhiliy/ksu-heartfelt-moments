import { Components, CssVarsTheme, Theme } from "@mui/material";

export const MuiSelect: Components<Theme & CssVarsTheme>["MuiSelect"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.shape.borderRadius,
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
      },
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
    }),
    select: ({ theme }) => ({
      border: `2px solid ${theme.palette.divider}`,
      minHeight: theme.spacing(5),
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(1, 2),
      color: theme.palette.text.primary,
      fontSize: theme.typography.body2.fontSize,
    }),
    icon: ({ theme }) => ({
      color: theme.palette.text.primary,
    }),
  },

  variants: [
    {
      props: { size: "small" },
      style: ({ theme }) => ({
        minHeight: theme.spacing(4.5),
        fontSize: theme.typography.caption.fontSize,
      }),
    },
    {
      props: { size: "medium" },
      style: ({ theme }) => ({
        minHeight: theme.spacing(6),
        fontSize: theme.typography.body1.fontSize,
      }),
    },
  ],
};
