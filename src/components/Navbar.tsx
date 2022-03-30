import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled Components
const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Logo = styled.p`
  font-size: 4rem;
  padding: 2rem;
`;

const NavLinksContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
`;

const StyledNavLink = styled(Link)`
  font-size: 1.6rem;
  color: inherit;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    color: ${(props) => props.theme.color.highlight1};
  }
`;

type Props = {};

const Navbar = (props: Props) => {
  return (
    <Nav id="navElem">
      <Logo>KO - WEB DEV</Logo>
      <NavLinksContainer>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/">About</StyledNavLink>
        <StyledNavLink to="/">Portfolio</StyledNavLink>
        <StyledNavLink to="/">Contact</StyledNavLink>
      </NavLinksContainer>
    </Nav>
  );
};

export default Navbar;
