import React from "react";
import Nav from "./components/elements/Navbar";
import GlobalStyle from "./components/themes/GlobalStyle";
import Layout from "./components/layout/Layout";
const App = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Nav />
      </Layout>
    </>
  );
};
export default App;
