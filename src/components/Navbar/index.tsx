import { useState, useEffect, KeyboardEvent } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

// Icons
import hamburger from "images/icons/hamburger.svg";

// Logo
import myLogo from "images/logos/myLogo.png";

// Styled Components
import {
  Nav,
  LogoContainer,
  Logo,
  NavLinksContainer,
  StyledNavLink,
  DropdownToggleContainer,
  DropdownNav,
  DropdownLinksContainer,
} from "./styledNavbar";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const location = useLocation();

  // put resize observer on navbar to change dropdown toggle if dropdown is open and screen gets too large
  useEffect(() => {
    const resizeFunc = function () {
      const width = window.innerWidth;
      if (width > 600) {
        setDropdown(false);
      }
    };
    window.addEventListener("resize", resizeFunc);

    return () => {
      window.removeEventListener("resize", resizeFunc);
    };
  }, []);

  const handleKeyboardOpenNav = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      setDropdown((d) => !d);
    }
  };
  return (
    <header>
      <Nav id="navElem" data-testid="nav-testId">
        <Link to="/" aria-label="Home - logo link">
          <LogoContainer>
            <Logo src={myLogo} title="Kyle Olsen Web Dev Logo" />
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
        <DropdownToggleContainer
          onClick={() => setDropdown((d) => !d)}
          onKeyDown={(e) => handleKeyboardOpenNav(e)}
          tabIndex={0}
        >
          <Logo src={hamburger} alt="Click to open dropdown navigation" />
        </DropdownToggleContainer>
        {dropdown && (
          <DropdownNav>
            <DropdownLinksContainer>
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
                active={location.pathname === "/portfolio" ? "true" : "false"}
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
            </DropdownLinksContainer>
          </DropdownNav>
        )}
      </Nav>
    </header>
  );
};

export default Navbar;
