import styled from "styled-components";
import { Link } from "react-router-dom";
import type { TColor } from "./types";
import { handleColorProp } from "./functions";

export const LinkButton = styled(Link)<{ color: TColor }>`
  font-family: "Montserrat", sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${(props) => props.theme.color.primary1};
  text-decoration: none;
  padding: 1.2rem 2rem;
  background-color: ${(props) =>
    handleColorProp(props.theme, props.color)};
  border-radius: 5px;
  border: 3px solid ${(props) => handleColorProp(props.theme, props.color)};
  transition: all 0.2s;
  z-index: 2;
  cursor: pointer;

  &:hover,
  &:focus,
  &:focus-visible {
    color: ${(props) => handleColorProp(props.theme, props.color)};
    background-color: ${(props) =>
      handleColorProp(props.theme, props.color)};
    outline: none;
  }
`;
