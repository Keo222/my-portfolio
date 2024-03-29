import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled Components
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: calc(100vh - 15rem);
`;

export const ErrorMsg = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 10px;
`;

export const LinkButton = styled(Link)`
  font-family: "Montserrat", sans-serif;

  font-size: 1.6rem;
  font-weight: 500;
  color: ${(props) => props.theme.color.primary1};
  text-decoration: none;
  padding: 1.2rem 2rem;
  background-color: ${(props) => props.theme.color.highlight1};
  border-radius: 5px;
  border: 3px solid ${(props) => props.theme.color.highlight1};
  transition: all 0.2s;
  z-index: 2;
  cursor: pointer;

  &:hover,
  &:focus,
  &:focus-visible {
    color: ${(props) => props.theme.color.highlight1};
    background-color: ${(props) => props.theme.color.primary1};
    outline: none;
  }
`;
