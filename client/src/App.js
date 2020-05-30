import React from "react";
import Theme from "./components/themes/theme";
import Nav from "./components/elements/Navbar";
import GlobalStyle from "./components/themes/GlobalStyle";
import { ThemeProvider } from "styled-components";
const App = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <h1>App</h1>
        <Nav />
        {children}
      </ThemeProvider>
    </>
  );
};
export default App;
