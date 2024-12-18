import { Components, CssVarsTheme, Theme } from "@mui/material";

export const MuiSelect: Components<Theme & CssVarsTheme>["MuiSelect"] = {
  styleOverrides: {
    select: ({ theme }) => ({
      "&.MuiOutlinedInput-input": {
        height: "unset",
        minHeight: theme.spacing(6),
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(1.75, 2),
      },
    }),
  },

  variants: [
    {
      props: { size: "small" },
      style: ({ theme }) => ({
        "& .MuiOutlinedInput-root": {
          minHeight: theme.spacing(5),

          "& .MuiSelect-select": {
            padding: theme.spacing(1.25, 2),
          },
        },

        "& .MuiInputBase-adornedStart, & .MuiInputBase-inputAdornedStart": {
          "& .MuiSelect-select": {
            padding: theme.spacing(1.25, 2, 1.25, 0.5),
          },
        },

        "& .MuiInputBase-adornedEnd, & .MuiInputBase-inputAdornedEnd": {
          "& .MuiSelect-select": {
            padding: theme.spacing(1.25, 0.5, 1.25, 2),
          },
        },
      }),
    },
    {
      props: { size: "medium" },
      style: ({ theme }) => ({
        "& .MuiOutlinedInput-root": {
          minHeight: theme.spacing(6),

          "& .MuiSelect-select": {
            padding: theme.spacing(1.75, 2),
          },
        },

        "& .MuiInputBase-adornedStart, & .MuiInputBase-inputAdornedStart": {
          "& .MuiSelect-select": {
            padding: theme.spacing(1.75, 2, 1.75, 0.5),
          },
        },

        "& .MuiInputBase-adornedEnd, & .MuiInputBase-inputAdornedEnd": {
          "& .MuiSelect-select": {
            padding: theme.spacing(1.75, 0.5, 1.75, 2),
          },
        },
      }),
    },
  ],
};
