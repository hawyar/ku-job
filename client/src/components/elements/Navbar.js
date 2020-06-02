import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../elements/Button";
const Navbar = () => (
  <div>
    <StyledNav>
      <Wrapper>
        <MainLogo to="/">Qandil</MainLogo>

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
            <Button style={{ marginRight: "20px" }} outline>
              Log in
            </Button>
          </Link>

          <Link to="/register">
            <Button primary shadow>
              Sign up
            </Button>
          </Link>
        </div>
      </Wrapper>
    </StyledNav>
  </div>
);

const StyledNav = styled.nav`
  color: #e5e5e5;
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
  font-weight: 900;
  position: relative;
  text-transform: uppercase;
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

export default Navbar;
