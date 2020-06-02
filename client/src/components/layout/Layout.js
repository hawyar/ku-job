import React from "react";
import Navbar from "../elements/Navbar";
import Footer from "../elements/Footer";
import styled from "styled-components";
const Layout = ({ children }) => {
  return (
    <div>
      <BGDIV />
      <MainContainer>
        <Navbar />
        {children}
      </MainContainer>
      <Footer />
    </div>
  );
};

const MainContainer = styled.div`
  width: 85vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

const BGDIV = styled.div`
  width: 100vw;
  height: 60vh;
  background-color: #303960;
  position: absolute;
  z-index: -5;
`;

export default Layout;
