import React from "react";
import styled from "styled-components";

const Button = ({ children, primary, outline, shadow }) => {
  return (
    <StyledButton primary={primary} outline={outline} shadow={shadow}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 9px 18px;
  background-color: ${(props) => (props.primary ? "#e5e5e5" : "transparent")};
  border-radius: 2px;
  box-sizing: border-box;
  border: ${(props) => (props.outline ? "0.2px solid #e5e5e5;" : "0px")};
  color: ${(props) => (props.primary ? "#3f3f44" : "white")};
  font-weight: 600;
  box-shadow: ${(props) =>
    props.shadow ? "10px 10px 66px 0px rgba(0, 0, 0, 0.17)" : "0px"};
  cursor: pointer;
`;

export default Button;
