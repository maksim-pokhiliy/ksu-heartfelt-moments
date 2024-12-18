import { Components, CssVarsTheme, Theme } from "@mui/material";

export const MuiTextField: Components<Theme & CssVarsTheme>["MuiTextField"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      legend: {
        display: "none",
      },

      "& .MuiInputLabel-root": {
        marginBottom: theme.spacing(1),
        transform: "scale(1)",
        position: "relative",
      },

      "& .MuiFormHelperText-root": {
        marginTop: theme.spacing(1),
      },

      "& .MuiOutlinedInput-root": {
        backgroundColor: theme.palette.background.paper,

        fieldset: {
          top: 0,
        },
      },

      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.primary.main,
      },
      "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.error.main,
      },
      "& .MuiInputBase-input": {
        position: "relative",
        color: theme.palette.text.primary,
        transition: theme.transitions.create(["border-color", "background-color", "box-shadow"]),
        "&.Mui-disabled": {
          color: theme.palette.text.disabled,
          WebkitTextFillColor: theme.palette.text.disabled,
        },
      },
    }),
  },
  variants: [
    {
      props: { size: "small" },
      style: ({ theme }) => ({
        "& .MuiOutlinedInput-root": {
          minHeight: theme.spacing(5),
          input: {
            padding: theme.spacing(1.25, 2),
          },
        },
        "& .MuiInputBase-adornedStart, & .MuiInputBase-inputAdornedStart": {
          input: {
            padding: theme.spacing(1.25, 2, 1.25, 0.5),
          },
        },
        "& .MuiInputBase-adornedEnd, & .MuiInputBase-inputAdornedEnd": {
          input: {
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

          input: {
            padding: theme.spacing(1.75, 2),
          },
        },
        "& .MuiInputBase-adornedStart, & .MuiInputBase-inputAdornedStart": {
          input: {
            padding: theme.spacing(1.75, 2, 1.75, 0.5),
          },
        },
        "& .MuiInputBase-adornedEnd, & .MuiInputBase-inputAdornedEnd": {
          input: {
            padding: theme.spacing(1.75, 0.5, 1.75, 2),
          },
        },
      }),
    },
  ],
};
