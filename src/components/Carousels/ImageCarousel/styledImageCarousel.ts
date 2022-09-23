import styled from "styled-components";
import { animated } from "react-spring";

// Styled Components
export const SliderAndTicks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
export const ImgAndArrows = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  @media screen and (${(props) => props.theme.responsive.lg}) {
    width: clamp(180px, 90%, 700px);
  }
`;

export const NavigateArrow = styled.img`
  height: 5rem;
  margin-inline: 5px;
  vertical-align: bottom;
  user-select: none;
  opacity: 0.2;
  transition: all 0.15s;
  &:hover,
  &:focus,
  &:focus-visible {
    cursor: pointer;
    opacity: 1;
  }
`;

export const ImgDiv = styled(animated.div)`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  width: clamp(150px, 40vw, 500px);
  aspect-ratio: 0.8;
  border-radius: 10px;
  @media screen and (${(props) => props.theme.responsive.lg}) {
    width: clamp(150px, 80vw, 600px);
  }
`;

export const Image = styled(animated.img)`
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
`;
