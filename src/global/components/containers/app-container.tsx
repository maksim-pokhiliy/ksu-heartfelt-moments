"use client";

import { Box, Container, BoxProps } from "@mui/material";

export type AppContainerProps = BoxProps;

export const AppContainer = ({ children, ...props }: AppContainerProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100vh",
        position: "relative",
        "::before": {
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundImage: "url('images/noise.png')",
          backgroundSize: "109px",
          backgroundRepeat: "repeat",
          opacity: 0.06,
          pointerEvents: "none",
          zIndex: 0,
        },
      }}
      {...props}
    >
      <Container maxWidth="md" sx={{ backgroundColor: "background.default" }}>
        {children}
      </Container>
    </Box>
  );
};
