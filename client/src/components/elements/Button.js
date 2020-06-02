import React from "react";
import styled from "styled-components";

export const Button = ({ children }) => {
  return <div>{children}</div>;
};

const StyledButton = styled.button`
  padding: 9px 18px;
  background-color: ${(props) => (props.primary ? "#252a34" : "transparent")};
  border-radius: 2px;
  box-sizing: border-box;
  border: ${(props) => (props.outline ? "0.2px solid grey;" : "0px")};
  color: ${(props) => (props.primary ? "white" : "black")};
  font-weight: 500;
  font-size: 14px;
  box-shadow: ${(props) =>
    props.shadow ? "10px 10px 66px 0px rgba(0, 0, 0, 0.17)" : "0px"};
  cursor: pointer;
`;
