import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import ImageSlider from "../components/ImageSlider";

// Styled Components

const AboutPageDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin-inline: auto;
  margin-top: 3rem;
  margin-bottom: 5rem;
  width: clamp(180px, 100vw, 1500px);

  @media screen and (${(props) => props.theme.responsive.lg}) {
    flex-direction: column;
  }
`;

const AboutInfoSection = styled.section`
  height: 100%;
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

const AboutHeader = styled.h1`
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

const AboutInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-block: 5rem;

  @media screen and (${(props) => props.theme.responsive.lg}) {
    margin-block: 2rem;
  }
`;

const AboutInfoP = styled.p`
  font-size: 2rem;
  text-indent: 4rem;
  line-height: 1.8;
  width: clamp(180px, 80%, 60ch);

  @media screen and (${(props) => props.theme.responsive.sm}) {
    font-size: 1.6rem;
  }
`;

const ContactButton = styled(Link)`
  font-family: "Montserrat", sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
  color: ${(props) => props.theme.color.primary1};
  text-decoration: none;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.color.highlight2};
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.color.highlight2};
  transition: all 0.2s;

  &:hover {
    color: ${(props) => props.theme.color.highlight2};
    background-color: ${(props) => props.theme.color.primary1};
  }

  @media screen and (${(props) => props.theme.responsive.lg}) {
    margin-top: 2rem;
  }

  @media screen and (${(props) => props.theme.responsive.sm}) {
    font-size: 1.4rem;
  }
`;

const AboutPicsSection = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (${(props) => props.theme.responsive.lg}) {
    order: 1;
  }
`;

const About = () => {
  return (
    <AboutPageDiv>
      <AboutInfoSection aria-label="About Kyle Olsen">
        <AboutHeader>About</AboutHeader>
        <AboutInfoDiv>
          <AboutInfoP>
            Kyle was born and raised in Oregon. He has a Bachelor’s of
            Music from Rice University in Houston, TX and also attended The
            Juilliard School while pursuing a Master’s of Music degree.
            Currently he is building websites as a self-taught web
            developer while continuing to play music regularly with the
            Oregon Symphony, the Portland Opera, and the Oregon Ballet
            Theater. Kyle hopes to find a fulltime career in web
            development.
          </AboutInfoP>
          <AboutInfoP>
            In his free time Kyle enjoys distance running, gardening, and
            spending time outdoors.
          </AboutInfoP>
        </AboutInfoDiv>
        <ContactButton to="/contact">Contact Kyle</ContactButton>
      </AboutInfoSection>
      <AboutPicsSection aria-label="Pictures of Kyle Olsen">
        <ImageSlider />
      </AboutPicsSection>
    </AboutPageDiv>
  );
};

export default About;
