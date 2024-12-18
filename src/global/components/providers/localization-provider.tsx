"use client";

import { Box, CircularProgress } from "@mui/material";
import { createInstance, i18n } from "i18next";
import { ReactNode, useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";

import { initTranslations } from "@app/i18n";

import { AppContainer } from "../containers/app-container";

export function LocalizationProvider({
  children,
  locale,
  namespaces,
}: {
  children: ReactNode;
  locale: string;
  namespaces: string[];
}) {
  const [i18nInstance, setI18nInstance] = useState<i18n | null>(null);

  useEffect(() => {
    async function loadTranslations() {
      const instance = createInstance();
      await initTranslations(locale, namespaces, instance);
      setI18nInstance(instance);
    }

    loadTranslations();
  }, [locale, namespaces]);

  if (!i18nInstance) {
    return (
      <AppContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress color="inherit" size={30} />
        </Box>
      </AppContainer>
    );
  }

  return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;
}
