import React from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";

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
  color: ${(props) => props.theme.color.highlight2};
`;

const NavLinksContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
`;

const StyledNavLink = styled(NavLink)<{ active?: boolean }>`
  font-size: 1.6rem;
  color: ${(props) =>
    props.active ? props.theme.color.highlight1 : "inherit"};
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    color: ${(props) => props.theme.color.highlight1};
  }
`;

const Navbar = () => {
  let location = useLocation();
  return (
    <Nav id="navElem">
      <Logo>KO - WEB DEV</Logo>
      <NavLinksContainer>
        <StyledNavLink active={location.pathname === "/"} to="/">
          Home
        </StyledNavLink>
        <StyledNavLink active={location.pathname === "/about"} to="/about">
          About
        </StyledNavLink>
        <StyledNavLink
          active={location.pathname === "/portfolio"}
          to="/portfolio"
        >
          Portfolio
        </StyledNavLink>
        <StyledNavLink
          active={location.pathname === "/contact"}
          to="/contact"
        >
          Contact
        </StyledNavLink>
      </NavLinksContainer>
    </Nav>
  );
};

export default Navbar;
