import { Components, CssVarsTheme, Theme } from "@mui/material";

import { MuiButton } from "./button";
import { MuiInputBase } from "./input-base";
import { MuiSelect } from "./select";
import { MuiTextField } from "./text-field";

export const components: Components<Omit<Theme, "components" | "palette"> & CssVarsTheme> = {
  MuiInputBase,
  MuiSelect,
  MuiTextField,
  MuiButton,
};
