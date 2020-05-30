import React, { Fragment } from "react";
import Nav from "./components/elements/Navbar";
import GlobalStyle from "./components/styles/GlobalStyle";
const App = ({ children }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <h1>App</h1>
      <Nav />
      {children}
    </Fragment>
  );
};
export default App;
