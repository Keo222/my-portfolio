import styled from "styled-components";

// Helper Functions

export const AboutPageDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-inline: auto;
  margin-top: 3rem;
  margin-bottom: 5rem;
  width: clamp(180px, 100vw, 1600px);

  @media screen and (${(props) => props.theme.responsive.lg}) {
    flex-direction: column;
  }
`;

export const AboutInfoSection = styled.section`
  min-height: 100%;
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media screen and (${(props) => props.theme.responsive.lg}) {
    margin-top: 4rem;
    order: 2;
  }
`;

export const AboutHeader = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: 3px;

  margin-top: 3rem;
  color: ${(props) => props.theme.color.highlight1};
  text-transform: uppercase;

  @media screen and (${(props) => props.theme.responsive.sm}) {
    font-size: 2rem;
  }
`;

export const AboutInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (${(props) => props.theme.responsive.lg}) {
    margin-block: 2rem;
  }
`;

export const AboutInfoP = styled.p`
  font-size: 2rem;
  text-indent: 4rem;
  line-height: 1.8;
  width: clamp(180px, 80%, 60ch);

  @media screen and (${(props) => props.theme.responsive.sm}) {
    font-size: 1.6rem;
  }
`;

export const SocialsDiv = styled.div`
  display: flex;
  height: 3rem;
  margin-top: 3rem;
  margin-bottom: 5rem;
  width: 100%;
  justify-content: center;
  gap: 4rem;
`;

export const SocialLink = styled.a`
  transition: all 0.2s;

  &:hover,
  &:focus-visible {
    outline: none;
    & img {
      transform: translateY(-4px);
    }
  }
`;

export const SocialLogo = styled.img`
  height: 100%;

  &:focus {
    outline: none;
  }
`;

export const AboutPicsSection = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (${(props) => props.theme.responsive.lg}) {
    order: 1;
    height: fit-content;
  }
`;
