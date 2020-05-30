import { ThemeProvider } from "styled-components";
import Theme from "../themes/theme";
import React from "react";

export const wraprootElement = (element) => {
  return <ThemeProvider theme={Theme}>{element}</ThemeProvider>;
};
