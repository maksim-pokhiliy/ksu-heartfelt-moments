import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

import { AppTypography } from "@app/global/components/ui/app-typography";

export const Greeting = () => {
  const { t } = useTranslation(["main"]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        gap: 2,
        position: "relative",
      }}
    >
      <AppTypography variant="h1" sx={{ textAlign: "center" }} squiggly>
        {t("video.title")}
      </AppTypography>

      <AppTypography
        variant="body2"
        sx={{ mb: 4, textAlign: "center", width: { xs: "100%", md: "60%" } }}
      >
        {t("video.subtitle")}
      </AppTypography>

      <video
        controls
        width="100%"
        height="100%"
        style={{
          borderRadius: "8px",
        }}
      >
        <source src="/greeting.mp4" type="video/mp4" />

        <track kind="captions" srcLang="en" label="English captions" />
      </video>
    </Box>
  );
};
