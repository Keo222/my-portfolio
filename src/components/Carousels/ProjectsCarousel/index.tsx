import { useEffect, KeyboardEvent } from "react";
import styled from "styled-components";
import { animated, useSpringRef, useTransition } from "react-spring";

// Components
import CarouselTicks from "../CarouselTicks";

// Icons
import right_arrow from "images/icons/right_arrow.svg";
import left_arrow from "images/icons/left_arrow.svg";
import external_link from "images/icons/external_link.svg";

// Logos
import react_logo from "images/logos/react_logo.svg";
import ts_logo from "images/logos/typescript_logo.svg";
import nodejs_logo from "images/logos/nodejs_logo.svg";
import postgres_logo from "images/logos/postgresql_logo.svg";
import golang_logo from "images/logos/golang_logo.svg";
import svelte_logo from "images/logos/svelte_logo.svg";

// Types
import { ProjArray } from "../../../customTypes";

const SliderSection = styled.section`
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

const LeftArrow = styled.img`
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

const RightArrow = styled(LeftArrow)`
  right: 0;
`;

const ExternalLink = styled.a`
  position: absolute;
  top: 2rem;
  right: 2rem;

  &:focus img,
  &:focus-visible img {
    opacity: 1;
  }
`;
const ExternalLinkImg = styled.img`
  height: 3rem;
  width: 3rem;

  opacity: 0.4;
  transition: all 0.15s;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const InfoDiv = styled(animated.div)`
  display: flex;
  align-items: center;

  height: 100%;
  width: 100%;

  @media screen and (${(props) => props.theme.responsive.lg}) {
    flex-direction: column;
  }
`;

const SiteImg = styled.img`
  object-fit: cover;
  height: 100%;
  aspect-ratio: 1.7777777;
  @media screen and (${(props) => props.theme.responsive.lg}) {
    width: 100%;
    height: auto;
  }
`;

const InfoTextDiv = styled.div`
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

const SiteHeader = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-size: 2.4rem;
  font-weight: 800;
  letter-spacing: 4px;
  text-align: center;
`;

const SiteDescription = styled.p`
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

const TechImgsDiv = styled.div`
  width: clamp(200px, 80%, 500px);

  margin-top: 2rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const TechLogo = styled.img`
  height: 5rem;
  width: 5rem;
  margin-inline: 1rem;
`;

type Props = {
  projects: ProjArray;
  currentProj: number;
  setCurrentProj: Function;
  toggled: boolean;
};

type DirType = "next" | "prev";

const ProjectsCarousel = ({
  projects,
  currentProj,
  setCurrentProj,
  toggled,
}: Props) => {
  // Tech Logo Switch
  const logoSwitch = (tech: string) => {
    switch (tech) {
      case "React":
        return (
          <TechLogo
            key={tech}
            src={react_logo}
            alt="React logo"
            title="React Logo"
          />
        );
      case "Typescript":
        return (
          <TechLogo
            key={tech}
            src={ts_logo}
            alt="Typescript logo"
            title="Typescript Logo"
          />
        );
      case "Node.js":
        return (
          <TechLogo
            key={tech}
            src={nodejs_logo}
            alt="Node.js logo"
            title="Node.js Logo"
          />
        );
      case "PostgreSQL":
        return (
          <TechLogo
            key={tech}
            src={postgres_logo}
            alt="PostgreSQL logo"
            title="PostgreSQL Logo"
          />
        );
      case "Golang":
        return (
          <TechLogo
            key={tech}
            src={golang_logo}
            alt="Golang logo"
            title="Golang Logo"
          />
        );
      case "Svelte":
        return (
          <TechLogo
            key={tech}
            src={svelte_logo}
            alt="Svelte logo"
            title="Svelte Logo"
          />
        );
      default:
        return (
          <TechLogo
            key="default"
            src={react_logo}
            alt="React logo"
            title="React Logo"
          />
        );
    }
  };
  // Slider Animations
  const transRef = useSpringRef();
  const transitions = useTransition(currentProj, {
    ref: transRef,
    keys: currentProj,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 600 },
    exitBeforeEnter: true,
  });

  useEffect(() => {
    transRef.start();
  }, [currentProj, transRef]);
  // Navigate Projects
  const nextProject = () => {
    setCurrentProj(
      currentProj === projects.length - 1 ? 0 : currentProj + 1
    );
  };
  const prevProject = () => {
    setCurrentProj(
      currentProj === 0 ? projects.length - 1 : currentProj - 1
    );
  };

  const keyboardHandleNav = (
    e: KeyboardEvent<HTMLDivElement>,
    dir: DirType
  ) => {
    if (e.key === "Enter") {
      if (dir === "next") {
        setCurrentProj(
          currentProj === projects.length - 1 ? 0 : currentProj + 1
        );
      } else {
        setCurrentProj(
          currentProj === 0 ? projects.length - 1 : currentProj - 1
        );
      }
    }
  };
  return (
    <>
      <SliderSection>
        {transitions((styles, i) => (
          <>
            <LeftArrow
              src={left_arrow}
              alt="Arrow pointing left. Go to previous project."
              tabIndex={0}
              onClick={() => prevProject()}
              onKeyDown={(e) => keyboardHandleNav(e, "prev")}
            />
            <InfoDiv data-testid="slide-testId" style={styles} key={i}>
              <SiteImg
                srcSet={`${
                  projects[
                    i <= projects.length - 1 ? i : projects.length - 1
                  ].imgs[600]
                } 600w,${
                  projects[
                    i <= projects.length - 1 ? i : projects.length - 1
                  ].imgs[900]
                } 900w,
                ${
                  projects[
                    i <= projects.length - 1 ? i : projects.length - 1
                  ].imgs[1200]
                } 1200w,`}
                src={
                  projects[
                    i <= projects.length - 1 ? i : projects.length - 1
                  ].imgs[1200]
                }
                alt={
                  projects[
                    i <= projects.length - 1 ? i : projects.length - 1
                  ].name
                }
              />
              <InfoTextDiv>
                <SiteHeader>
                  {
                    projects[
                      i <= projects.length - 1 ? i : projects.length - 1
                    ].name
                  }
                </SiteHeader>
                <SiteDescription>
                  {
                    projects[
                      i <= projects.length - 1 ? i : projects.length - 1
                    ].description
                  }
                </SiteDescription>
                <TechImgsDiv>
                  {projects[
                    i <= projects.length - 1 ? i : projects.length - 1
                  ].tech.map((t) => logoSwitch(t))}
                </TechImgsDiv>
                <ExternalLink
                  target="_blank"
                  rel="noreferrer noopener"
                  href={
                    projects[
                      i <= projects.length - 1 ? i : projects.length - 1
                    ].link
                  }
                >
                  <ExternalLinkImg
                    src={external_link}
                    alt="image to denote an external link"
                  />
                </ExternalLink>
              </InfoTextDiv>
            </InfoDiv>
            <RightArrow
              src={right_arrow}
              alt="Arrow pointing right. Go to next project."
              tabIndex={0}
              onClick={() => nextProject()}
              onKeyDown={(e) => keyboardHandleNav(e, "next")}
            />
          </>
        ))}
      </SliderSection>
      <CarouselTicks
        numSlides={projects.length}
        setCurrent={setCurrentProj}
        current={currentProj}
        color={toggled ? "primary" : "secondary"}
      />
    </>
  );
};

export default ProjectsCarousel;
