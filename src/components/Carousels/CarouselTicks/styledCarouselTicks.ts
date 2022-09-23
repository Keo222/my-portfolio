import styled from "styled-components";

// Styled Components
export const CarouselTicksDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const TickMarkContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Tick = styled.div<{
  current: boolean;
  color: "primary" | "secondary";
}>`
  height: 1rem;
  width: 1rem;
  border: 1px solid
    ${(props) =>
      props.current && props.color === "primary"
        ? props.theme.color.highlight1
        : props.current && props.color === "secondary"
        ? props.theme.color.highlight2
        : "#000"};
  border-radius: 50%;
  margin-top: 1rem;
  margin-bottom: 2rem;
  background-color: ${(props) =>
    props.current && props.color === "primary"
      ? props.theme.color.highlight1
      : props.current && props.color === "secondary"
      ? props.theme.color.highlight2
      : ""};
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
  }
`;
