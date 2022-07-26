import { useState, useEffect, KeyboardEvent } from "react";
import styled from "styled-components";
import { Link, NavLink, useLocation } from "react-router-dom";

// Icons
import hamburger from "images/icons/hamburger.svg";

// Logo
import myLogo from "images/logos/myLogo.png";

// Styled Components
const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  height: 15rem;

  @media screen and (${(props) => props.theme.responsive.sm}) {
    height: 10rem;
  }
`;

const Logo = styled.img`
  height: 100%;
`;

const NavLinksContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;

  @media screen and (${(props) => props.theme.responsive.sm}) {
    display: none;
  }
`;

const DropdownToggleContainer = styled.div`
  height: 6rem;
  margin-right: 1.5rem;
  cursor: pointer;
  display: none;

  @media screen and (${(props) => props.theme.responsive.sm}) {
    display: block;
  }
`;

const DropdownNav = styled.div`
  position: absolute;
  width: 100%;
  top: 10rem;
  z-index: 100;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
`;

const DropdownLinksContainer = styled.div`
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
    <Nav id="navElem" data-testid="nav-testId">
      <Link to="/">
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
  );
};

export default Navbar;
