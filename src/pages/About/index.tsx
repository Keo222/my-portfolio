import { Helmet } from "react-helmet";
import { personalImages } from "jsonDB/images";

// Components
import { ImageCarousel } from "../../components/Carousels";

// Logos
import github from "../images/logos/github-black.svg";
import linkedin from "../images/logos/linkedin_logo.svg";

// Styled Components
import {
  AboutPageDiv,
  AboutInfoSection,
  AboutHeader,
  AboutInfoDiv,
  AboutInfoP,
  SocialsDiv,
  SocialLink,
  SocialLogo,
  ContactButton,
  AboutPicsSection,
} from "./styled";

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
