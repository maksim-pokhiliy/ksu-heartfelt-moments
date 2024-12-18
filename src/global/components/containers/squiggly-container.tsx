import { Box } from "@mui/material";
import { useEffect } from "react";

type SquigglyContainerProps = {
  children: React.ReactNode;
};

export const SquigglyContainer = ({ children }: SquigglyContainerProps) => {
  useEffect(() => {
    if (!document.getElementById("squiggly-filters")) {
      const svgNS = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNS, "svg");

      svg.setAttribute("id", "squiggly-filters");
      svg.setAttribute("style", "position: absolute; width: 0; height: 0;");

      svg.innerHTML = `
        <defs>
          ${[0, 1, 2, 3, 4]
            .map(
              (i) => `
            <filter id="squiggly-${i}">
              <feTurbulence baseFrequency="0.02" numOctaves="3" result="noise" seed="${i}" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="${i % 2 === 0 ? 6 : 8}" />
            </filter>
          `,
            )
            .join("")}
        </defs>
      `;
      document.body.appendChild(svg);
    }
  }, []);

  return (
    <Box
      sx={{
        animation: "squiggly 0.34s linear infinite",
        "@keyframes squiggly": {
          "0%": { filter: "url(#squiggly-0)" },
          "25%": { filter: "url(#squiggly-1)" },
          "50%": { filter: "url(#squiggly-2)" },
          "75%": { filter: "url(#squiggly-3)" },
          "100%": { filter: "url(#squiggly-4)" },
        },
      }}
    >
      {children}
    </Box>
  );
};
