import { theme } from "@chakra-ui/core";

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      900: "#303960",
      800: "#ea9a96",
      700: "#f8b24f",
      600: "#e5e5e5",
    },
  },
  breakpoints,
};

export default customTheme;
