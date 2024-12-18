"use client";

import { Typography, TypographyProps, TypographyVariant } from "@mui/material";
import { HTMLMotionProps } from "framer-motion";
import React from "react";

import { SquigglyContainer } from "../containers/squiggly-container";

type AppTypographyProps = {
  variant?: TypographyVariant;
  squiggly?: boolean;
} & Omit<TypographyProps, "fontSize" | "fontWeight" | "fontStyle"> &
  HTMLMotionProps<"div">;

export const AppTypography = ({
  children,
  variant = "body1",
  squiggly = false,
  ...props
}: AppTypographyProps) => {
  const ComponentWrapper = squiggly ? SquigglyContainer : React.Fragment;

  return (
    <ComponentWrapper>
      <Typography {...props} variant={variant}>
        {children}
      </Typography>
    </ComponentWrapper>
  );
};
