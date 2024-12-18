import { Box } from "@mui/material";

import { AppTypography } from "@app/global/components/ui/app-typography";

import { PageSectionGallery } from "./page-section-gallery";

interface PageSectionProps {
  title: string;
  subtitle: string;
  images?: string[];
  center?: boolean;
}

export const PageSection = ({ title, subtitle, images, center = false }: PageSectionProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: center ? "center" : "flex-start",
        alignItems: "center",
        minHeight: "100vh",
        gap: 2,
        pt: center ? 0 : 10,
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <AppTypography variant="h1" sx={{ textAlign: "center" }} squiggly>
        {title}
      </AppTypography>

      <AppTypography
        variant="body2"
        sx={{ mb: 4, textAlign: "center", width: { xs: "100%", md: "60%" } }}
      >
        {subtitle}
      </AppTypography>

      {images && <PageSectionGallery images={images} />}
    </Box>
  );
};
