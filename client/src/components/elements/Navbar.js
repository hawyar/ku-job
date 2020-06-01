import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Navbar = () => (
  <div>
    <StyledNav>
      <Wrapper>
        <MainLogo to="/">Norcom</MainLogo>

        <LinkWrapper>
          <li>
            <Link to="/">Pricing</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/">Careers</Link>
          </li>
        </LinkWrapper>
        <div>
          <Link to="/login">
            <StyledButton style={{ marginRight: "20px" }}>Log in</StyledButton>
          </Link>

          <Link to="/register">
            <StyledButton primary>Sign up</StyledButton>
          </Link>
        </div>
      </Wrapper>
    </StyledNav>
  </div>
);

const StyledNav = styled.nav`
  color: black;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0rem;
  /* background-color: #252a34; */

  margin: 0 auto;
  /* box-shadow: 10px 10px 66px 0px rgba(0, 0, 0, 0.14); */
`;

const MainLogo = styled(Link)`
  flex: 1;
  font-size: 16px;
  color: black;
  text-decoration: none;
  font-weight: 600;
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
      color: inherit;
      text-decoration: none;
      font-size: 14px;
      position: relative;

      text-decoration: none;
      background-image: linear-gradient(currentColor, currentColor);
      background-position: 0% 100%;
      background-repeat: no-repeat;
      background-size: 0% 2px;
      transition: background-size 0.3s;

      :hover {
        background-size: 100% 2px;
      }

      :focus {
        background-size: 100% 2px;
      }
    }
  }
`;

const StyledButton = styled.button`
  padding: 9px 18px;
  background-color: ${(props) => (props.primary ? "#252a34" : "#eaeaea")};
  border-radius: 2px;
  border: none;
  color: ${(props) => (props.primary ? "white" : "black")};
  font-weight: 500;
  font-size: 14px;
  box-shadow: 10px 10px 66px 0px rgba(0, 0, 0, 0.17);
  cursor: pointer;
`;

export default Navbar;
