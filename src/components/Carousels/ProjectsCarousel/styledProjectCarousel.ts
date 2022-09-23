import styled from "styled-components";
import { animated } from "react-spring";

export const SliderSection = styled.section`
  width: 100%;
  height: 30vw;

  margin-top: 1rem;
  margin-bottom: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  @media screen and (${(props) => props.theme.responsive.lg}) {
    height: fit-content;
  }
`;

export const LeftArrow = styled.img`
  height: 5rem;

  margin-inline: 5px;

  vertical-align: bottom;
  position: absolute;
  z-index: 15;

  user-select: none;
  opacity: 0.4;
  transition: all 0.15s;

  &:hover,
  &:focus,
  &:focus-visible {
    cursor: pointer;
    opacity: 1;
  }
`;

export const RightArrow = styled(LeftArrow)`
  right: 0;
`;

export const ExternalLink = styled.a`
  position: absolute;
  top: 2rem;
  right: 2rem;

  &:focus img,
  &:focus-visible img {
    opacity: 1;
  }
`;
export const ExternalLinkImg = styled.img`
  height: 3rem;
  width: 3rem;

  opacity: 0.4;
  transition: all 0.15s;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export const InfoDiv = styled(animated.div)`
  display: flex;
  align-items: center;

  height: 100%;
  width: 100%;

  @media screen and (${(props) => props.theme.responsive.lg}) {
    flex-direction: column;
  }
`;

export const SiteImg = styled.img`
  object-fit: cover;
  height: 100%;
  aspect-ratio: 1.7777777;
  @media screen and (${(props) => props.theme.responsive.lg}) {
    width: 100%;
    height: auto;
  }
`;

export const InfoTextDiv = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: space-around;

  color: ${(props) => props.theme.color.primary1};
  background-color: ${(props) => props.theme.color.primary2};

  @media screen and (${(props) => props.theme.responsive.lg}) {
    width: 100%;
    padding-block: 3rem;
  }
`;

export const SiteHeader = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-size: 2.4rem;
  font-weight: 800;
  letter-spacing: 4px;
  text-align: center;
`;

export const SiteDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  line-height: 2;
  color: #cbcbcb;

  width: 65%;

  @media screen and (${(props) => props.theme.responsive.lg}) {
    margin-block: 5rem;
  }
`;

export const TechImgsDiv = styled.div`
  width: clamp(200px, 80%, 500px);

  margin-top: 2rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const TechLogo = styled.img`
  height: 5rem;
  width: 5rem;
  margin-inline: 1rem;
`;
