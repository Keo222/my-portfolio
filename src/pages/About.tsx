import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { personalImages } from "jsonDB/images";

// Components
import { ImageCarousel } from "../components/Carousels";

// Logos
import github from "../images/logos/github-black.svg";
import linkedin from "../images/logos/linkedin_logo.svg";

// Styled Components
const AboutPageDiv = styled.div`
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

const AboutInfoSection = styled.section`
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

const SocialsDiv = styled.div`
  display: flex;
  height: 3rem;
  margin-top: 3rem;
  margin-bottom: 5rem;
  width: 100%;
  justify-content: center;
  gap: 4rem;
`;

const SocialLink = styled.a`
  transition: all 0.2s;

  &:hover,
  &:focus-visible {
    outline: none;
    & img {
      transform: translateY(-8px);
    }
  }
`;

const SocialLogo = styled.img`
  height: 100%;

  &:focus {
    outline: none;
  }
`;

const ContactButton = styled(Link)`
  font-family: "Montserrat", sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${(props) => props.theme.color.primary1};
  text-decoration: none;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.color.highlight2};
  border-radius: 5px;
  border: 3px solid ${(props) => props.theme.color.highlight2};
  transition: all 0.2s;
  cursor: pointer;

  &:hover,
  &:focus,
  &:focus-visible {
    color: ${(props) => props.theme.color.highlight2};
    background-color: ${(props) => props.theme.color.primary1};
    outline: none;
  }

  @media screen and (${(props) => props.theme.responsive.lg}) {
    margin-top: 2rem;
  }
`;

const AboutPicsSection = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (${(props) => props.theme.responsive.lg}) {
    order: 1;
    height: fit-content;
  }
`;

const About = () => {
  return (
    <>
      <Helmet>
        <title>Kyle Olsen: About</title>
        <meta
          name="description"
          content="Hi! My name is Kyle Olsen and I am a web developer in the Portland, Oregon area. I am a fullstack web developer focusing on React.js, Node.js, Express.js, and PostgreSQL. Read more about me here."
        />
      </Helmet>
      <AboutPageDiv>
        <AboutInfoSection aria-labelledby="about-header">
          <AboutHeader id="about-header">About</AboutHeader>
          <AboutInfoDiv>
            <AboutInfoP>
              Hi! My name is Kyle Olsen and I was born and raised in
              Oregon. I have a Bachelor’s of Music from Rice University in
              Houston, TX and I also attended The Juilliard School while
              pursuing a Master’s of Music degree. Currently, I'm building
              websites as a self-taught web developer while continuing to
              play music regularly with the Oregon Symphony, the Portland
              Opera, and the Oregon Ballet Theater. I hope to find a
              fulltime career in web development.
            </AboutInfoP>
            <AboutInfoP>
              In my free time I enjoy running, gardening, and exploring the
              outdoors.
            </AboutInfoP>
          </AboutInfoDiv>
          <SocialsDiv>
            <SocialLink
              href="https://github.com/Keo222"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialLogo src={github} title="Github" alt="Github Logo" />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/kyle-olsen-dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialLogo
                src={linkedin}
                title="LinkedIn"
                alt="LinkedIn Logo"
              />
            </SocialLink>
          </SocialsDiv>
          <ContactButton to="/contact">Contact Me</ContactButton>
        </AboutInfoSection>
        <AboutPicsSection aria-label="Pictures of Kyle Olsen">
          <ImageCarousel images={personalImages} />
        </AboutPicsSection>
      </AboutPageDiv>
    </>
  );
};

export default About;
