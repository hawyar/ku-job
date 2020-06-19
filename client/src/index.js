import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import CustomTheme from "./components/themes/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={CustomTheme}>
      <CSSReset />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
