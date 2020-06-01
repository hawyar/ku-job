import React from "react";
import Navbar from "../elements/Navbar";
import Footer from "../elements/Footer";
import styled from "styled-components";
const Layout = ({ children }) => {
  return (
    <div>
      <MainContainer>
        <Navbar />
        {children}
        <Footer />
      </MainContainer>
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

export default Layout;
