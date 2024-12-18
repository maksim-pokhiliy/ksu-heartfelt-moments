import { Box, ImageList, ImageListItem, Theme, useMediaQuery } from "@mui/material";
import Image from "next/image";

interface PageSectionGalleryProps {
  images: string[];
}

export const PageSectionGallery = ({ images }: PageSectionGalleryProps) => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        height: { xs: "100vh", md: "66vh" },
        borderRadius: (theme) => theme.typography.pxToRem(8),
        overflow: "hidden",
        overflowY: "scroll",
        top: 0,
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <ImageList variant="masonry" cols={isMobile ? 2 : 3} gap={18}>
        {images.map((item) => (
          <ImageListItem
            key={item}
            sx={{
              lineHeight: 0,
              borderRadius: (theme) => theme.typography.pxToRem(8),
              overflow: "hidden",
            }}
          >
            <Image
              src={item}
              alt="picture of the cat"
              sizes="100vw"
              width={1}
              height={1}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
