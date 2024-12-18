"use client";

import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

import { i18nConfig } from "@app/i18n";

import { AppContainer } from "../containers/app-container";
import { AppSelect } from "../ui/app-select";

export const Header = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const newLanguage = event.target.value as string;

    if (i18nConfig.locales.includes(newLanguage)) {
      i18n.changeLanguage(newLanguage);
    }
  };

  const languageOptions = i18nConfig.locales.map((locale: string) => ({
    value: locale,
    label: locale.toUpperCase(),
  }));

  return (
    <AppContainer sx={{ minHeight: "auto" }}>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          py: 2,
          px: 0,
          justifyContent: "flex-end",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "flex-end",
            px: "0 !important",
          }}
        >
          <AppSelect
            options={languageOptions}
            value={i18n.language}
            onChange={handleLanguageChange}
            placeholder="Select Language"
            sx={{ width: 150 }}
            size="small"
            variant="filled"
          />
        </Toolbar>
      </AppBar>
    </AppContainer>
  );
};
