import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  height: 15rem;

  @media screen and (${(props) => props.theme.responsive.sm}) {
    height: 10rem;
  }
`;

export const Logo = styled.img`
  height: 100%;
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;

  @media screen and (${(props) => props.theme.responsive.sm}) {
    display: none;
  }
`;

export const DropdownToggleContainer = styled.div`
  height: 6rem;
  margin-right: 1.5rem;
  cursor: pointer;
  display: none;

  @media screen and (${(props) => props.theme.responsive.sm}) {
    display: block;
  }
`;

export const DropdownNav = styled.div`
  position: absolute;
  width: 100%;
  top: 10rem;
  z-index: 100;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
`;

export const DropdownLinksContainer = styled.div`
  width: 100%;
  height: 50vh;
  background-color: ${(props) => props.theme.color.primary1};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)<{ active: string }>`
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
