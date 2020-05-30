import React from "react";
import styled from "styled-components";
const Navbar = () => (
  <div>
    <StyledNav>
      <Wrapper>
        <MainLogo>Placeholder</MainLogo>
        <LinkWrapper>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Careers</a>
          </li>
        </LinkWrapper>
        <div>
          <StyledButton style={{ marginRight: "20px" }}>Log in</StyledButton>
          <StyledButton primary>Sign up</StyledButton>
        </div>
      </Wrapper>
    </StyledNav>
  </div>
);

const StyledNav = styled.nav`
  margin-top: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  background-color: #e25822;
  width: 75vw;
  margin: 0 auto;
  border-radius: 5px;
`;

const MainLogo = styled.h3`
  flex: 1;
  font-size: 16px;
  font-weight: 800;
`;

const LinkWrapper = styled.ul`
  list-style: none;
  display: flex;
  margin-right: 30px;

  li {
    margin-right: 20px;
    :last-child {
      margin-right: 0px;
    }

    a {
      color: black;
      text-decoration: none;
      font-size: 14px;
    }
  }
`;

const StyledButton = styled.button`
  padding: 9px 18px;
  background-color: ${(props) => (props.primary ? "#10316b" : "#ececeb")};
  border-radius: 5px;
  border: none;
  color: ${(props) => (props.primary ? "white" : "black")};
  font-weight: 600;
  font-size: 14px;
  box-shadow: 10px 10px 66px 0px rgba(0, 0, 0, 0.17);
`;

export default Navbar;
