"use client";

import { createTheme } from "@mui/material";
import { Amatic_SC as Amatic } from "next/font/google";

import { components } from "./components";

declare module "@mui/material/styles" {
  interface Theme {
    customSizes: {
      height: {
        full: string;
      };
    };
  }

  interface ThemeOptions {
    customSizes: {
      height: {
        full: string;
      };
    };
  }
}

const amatic = Amatic({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
  display: "swap",
});

const baseTheme = createTheme({
  typography: {
    fontFamily: amatic.style.fontFamily,
  },
  customSizes: {
    height: {
      full: "100vh",
    },
  },
});

export const theme = createTheme(baseTheme, {
  components,
  palette: {
    primary: {
      main: "#B0C4DE",
      light: "#D8BFD8",
      dark: "#2F4F4F",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#D8BFD8",
      light: "#F5F5F5",
      dark: "#B0C4DE",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#B22222",
    },
    action: {
      hover: "rgba(0, 0, 0, 0.08)",
      selected: "rgba(0, 0, 0, 0.14)",
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "#B0C4DE",
      active: "#2F4F4F",
    },
    text: {
      primary: "#FF0088",
      secondary: "#FFFFFF",
    },
    background: {
      default: "#0F1115",
      paper: "#FFFFFF",
    },
    divider: "#FF0088",
  },
  typography: {
    h1: {
      fontSize: baseTheme.typography.pxToRem(120),
      lineHeight: baseTheme.typography.pxToRem(130),
      "@media (min-width: 376px) and (max-width: 1024px)": {
        fontSize: baseTheme.typography.pxToRem(100),
        lineHeight: baseTheme.typography.pxToRem(110),
      },
    },
    h2: {
      fontSize: baseTheme.typography.pxToRem(100),
      lineHeight: baseTheme.typography.pxToRem(110),
      "@media (min-width: 376px) and (max-width: 1024px)": {
        fontSize: baseTheme.typography.pxToRem(80),
        lineHeight: baseTheme.typography.pxToRem(90),
      },
    },
    h3: {
      fontSize: baseTheme.typography.pxToRem(80),
      lineHeight: baseTheme.typography.pxToRem(90),
      "@media (min-width: 376px) and (max-width: 1024px)": {
        fontSize: baseTheme.typography.pxToRem(65),
        lineHeight: baseTheme.typography.pxToRem(75),
      },
    },
    h4: {
      fontSize: baseTheme.typography.pxToRem(65),
      lineHeight: baseTheme.typography.pxToRem(75),
      "@media (min-width: 376px) and (max-width: 1024px)": {
        fontSize: baseTheme.typography.pxToRem(50),
        lineHeight: baseTheme.typography.pxToRem(60),
      },
    },
    h5: {
      fontSize: baseTheme.typography.pxToRem(50),
      lineHeight: baseTheme.typography.pxToRem(60),
      "@media (min-width: 376px) and (max-width: 1024px)": {
        fontSize: baseTheme.typography.pxToRem(40),
        lineHeight: baseTheme.typography.pxToRem(50),
      },
    },
    h6: {
      fontSize: baseTheme.typography.pxToRem(40),
      lineHeight: baseTheme.typography.pxToRem(50),
      "@media (min-width: 376px) and (max-width: 1024px)": {
        fontSize: baseTheme.typography.pxToRem(34),
        lineHeight: baseTheme.typography.pxToRem(48),
      },
    },
    body2: {
      fontSize: baseTheme.typography.pxToRem(34),
      lineHeight: baseTheme.typography.pxToRem(48),
      "@media (min-width: 376px) and (max-width: 1024px)": {
        fontSize: baseTheme.typography.pxToRem(30),
        lineHeight: baseTheme.typography.pxToRem(36),
      },
    },
    body1: {
      fontSize: baseTheme.typography.pxToRem(30),
      lineHeight: baseTheme.typography.pxToRem(36),
      "@media (min-width: 376px) and (max-width: 1024px)": {
        fontSize: baseTheme.typography.pxToRem(26),
        lineHeight: baseTheme.typography.pxToRem(32),
      },
    },
  },
});
