import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AppContainer } from "@app/global/components/containers/app-container";
import { LocalizationProvider } from "@app/global/components/providers/localization-provider";
import { theme } from "@app/global/theme";
import { BACK_TO_TOP_ANCHOR } from "@app/global/utils/constants/layout";
import { i18nConfig } from "@app/i18n";

const i18nNamespaces = ["main"];

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;

  if (!i18nConfig.locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang="en">
      <body id={BACK_TO_TOP_ANCHOR}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <LocalizationProvider namespaces={i18nNamespaces} locale={locale}>
              <AppContainer component="main">{children}</AppContainer>
            </LocalizationProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
