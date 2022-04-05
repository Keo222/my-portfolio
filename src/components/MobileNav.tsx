import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink, useLocation } from "react-router-dom";

// Icons
import hamburger from "../images/icons/hamburger.svg";

// Logo
import myLogo from "../images/logos/myLogo.png";

// Styled Components
const Nav = styled.nav`
  width: 100%;
  display: none;
  align-items: center;
  justify-content: space-between;

  @media screen and (${(props) => props.theme.responsive.sm}) {
    display: flex;
  }
`;

const LogoContainer = styled.div`
  height: 10rem;
`;

const Logo = styled.img`
  height: 100%;
`;

const DropdownToggleContainer = styled.div`
  height: 6rem;
  margin-right: 1.5rem;
  cursor: pointer;
`;

const DropdownNav = styled.div`
  position: absolute;
  width: 100%;
  top: 10rem;
  z-index: 100;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
`;

const NavLinksContainer = styled.div`
  width: 100%;
  height: 50vh;
  background-color: ${(props) => props.theme.color.primary1};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
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

type Props = {};

const MobileNav = (props: Props) => {
  const [dropdown, setDropdown] = useState(false);

  const location = useLocation();
  return (
    <Nav id="navElem">
      <Link to="/">
        <LogoContainer>
          <Logo src={myLogo} />
        </LogoContainer>
      </Link>
      <DropdownToggleContainer onClick={() => setDropdown((d) => !d)}>
        <Logo src={hamburger} />
      </DropdownToggleContainer>
      {dropdown && (
        <DropdownNav>
          <NavLinksContainer>
            <StyledNavLink
              active={location.pathname === "/" ? "true" : "false"}
              onClick={() => setDropdown(false)}
              to="/"
            >
              Home
            </StyledNavLink>
            <StyledNavLink
              active={location.pathname === "/about" ? "true" : "false"}
              onClick={() => setDropdown(false)}
              to="/about"
            >
              About
            </StyledNavLink>
            <StyledNavLink
              active={
                location.pathname === "/portfolio" ? "true" : "false"
              }
              onClick={() => setDropdown(false)}
              to="/portfolio"
            >
              Portfolio
            </StyledNavLink>
            <StyledNavLink
              active={location.pathname === "/contact" ? "true" : "false"}
              onClick={() => setDropdown(false)}
              to="/contact"
            >
              Contact
            </StyledNavLink>
          </NavLinksContainer>
        </DropdownNav>
      )}
    </Nav>
  );
};

export default MobileNav;
