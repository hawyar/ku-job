import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <CenteredContainer>
      <p style={{ textAlign: "center" }}>footer</p>
    </CenteredContainer>
  );
};

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Footer;
