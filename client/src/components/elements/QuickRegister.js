import React from "react";
import styled from "styled-components";
import Button from "../elements/Button";
const QuickRegister = () => {
  return (
    <div>
      <InputContainer
        name="email"
        type="email"
        required
        placeholder="Email Address"
        style={{ marginRight: "2rem", borderRadius: "2px" }}
        autoComplete="off"
      />
      <Button primary>Apply now</Button>
    </div>
  );
};

const InputContainer = styled.input`
  background-color: white;
  border: solid 0.5px #252a34;
  padding: 10px 14px;
  border-radius: 2px;
  width: 220px;
`;

export default QuickRegister;
