import React from "react";
import styled from "styled-components";
import { Link, NavLink, useLocation } from "react-router-dom";

// Logo
import myLogo from "../images/logos/myLogo.png";

// Styled Components
const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// const Logo = styled.p`
//   font-family: "Montserrat", sans-serif;
//   font-size: 4rem;
//   font-weight: 700;
//   padding: 2rem;
//   color: ${(props) => props.theme.color.highlight2};
// `;

const LogoContainer = styled.div`
  height: 15rem;
`;

const Logo = styled.img`
  height: 100%;
`;

const NavLinksContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
`;

const StyledNavLink = styled(NavLink)<{ active: string }>`
  font-size: 1.6rem;
  color: ${(props) =>
    props.active === "true" ? props.theme.color.highlight1 : "inherit"};
  font-weight: 700;
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
      <Link to="/">
        <LogoContainer>
          <Logo src={myLogo} />
        </LogoContainer>
      </Link>
      <NavLinksContainer>
        <StyledNavLink
          active={location.pathname === "/" ? "true" : "false"}
          to="/"
        >
          Home
        </StyledNavLink>
        <StyledNavLink
          active={location.pathname === "/about" ? "true" : "false"}
          to="/about"
        >
          About
        </StyledNavLink>
        <StyledNavLink
          active={location.pathname === "/portfolio" ? "true" : "false"}
          to="/portfolio"
        >
          Portfolio
        </StyledNavLink>
        <StyledNavLink
          active={location.pathname === "/contact" ? "true" : "false"}
          to="/contact"
        >
          Contact
        </StyledNavLink>
      </NavLinksContainer>
    </Nav>
  );
};

export default Navbar;
