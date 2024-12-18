"use client";

import { useTranslation } from "react-i18next";

import { Greeting } from "./components/greeting";
import { Hero } from "./components/hero";
import { PageSection } from "./components/page-section/page-section";
import { catsImages } from "./utils/cats-images";
import { cozinessImages } from "./utils/coziness-images";

export const HomePage = () => {
  const { t } = useTranslation(["main"]);

  return (
    <>
      <Hero />
      <PageSection title={t("music.title")} subtitle={t("music.subtitle")} center />
      <PageSection title={t("cats.title")} subtitle={t("cats.subtitle")} images={catsImages} />
      <PageSection title={t("reading.title")} subtitle={t("reading.subtitle")} center />
      <PageSection title={t("psychology.title")} subtitle={t("psychology.subtitle")} center />

      <PageSection
        title={t("coziness.title")}
        subtitle={t("coziness.subtitle")}
        images={cozinessImages}
      />

      <Greeting />
    </>
  );
};
