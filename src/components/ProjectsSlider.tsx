import React, { useEffect } from "react";
import styled from "styled-components";
import { animated, useSpringRef, useTransition } from "react-spring";

// Icons
import right_arrow from "../images/icons/right_arrow.svg";
import left_arrow from "../images/icons/left_arrow.svg";
import external_link from "../images/icons/external_link.svg";

// Logos
import react_logo from "../images/logos/react_logo.svg";
import ts_logo from "../images/logos/typescript_logo.svg";
import nodejs_logo from "../images/logos/nodejs_logo.svg";
import postgres_logo from "../images/logos/postgresql_logo.svg";
import golang_logo from "../images/logos/golang_logo.svg";
import svelte_logo from "../images/logos/svelte_logo.svg";

// WEBSITE IMAGES
// My Portfolio
import my_portfolio_home from "../images/websites/my_portfolio/my_portfolio_home.png";
import audio_engineer_home from "../images/websites/audio_engineer/audio_engineer_home.png";
import artist_store from "../images/websites/artist/artist_store.png";

import coming_soon from "../images/websites/coming_soon.jpg";

// Types
import { ProjArray } from "../customTypes/objectArrays";

const SliderSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const NavigateArrow = styled.img`
  height: 5rem;
  margin-inline: 5px;
  vertical-align: bottom;
  user-select: none;
  z-index: 15;
  opacity: 0.2;
  transition: all 0.15s;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const ExternalLink = styled.img`
  height: 3rem;
  width: 3rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  opacity: 0.2;
  transition: all 0.15s;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const InfoDiv = styled(animated.div)`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const SiteImg = styled.img`
  object-fit: cover;
  height: 100%;
  aspect-ratio: 1.7777777;
`;

const InfoTextDiv = styled.div`
  height: 100%;
  flex-grow: 1;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: ${(props) => props.theme.color.primary1};
  background-color: ${(props) => props.theme.color.primary2};
`;

const SiteHeader = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 4px;
`;

const SiteDescription = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
`;

const TechImgsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: clamp(200px, 80%, 500px);
  justify-content: space-evenly;
`;

const TechLogo = styled.img`
  height: 5rem;
  width: 5rem;
`;

type Props = {
  projects: ProjArray;
  currentProj: number;
  setCurrentProj: Function;
};

const ProjectsSlider = ({
  projects,
  currentProj,
  setCurrentProj,
}: Props) => {
  // Tech Logo Switch
  const logoSwitch = (tech: string) => {
    switch (tech) {
      case "React":
        return <TechLogo key={tech} src={react_logo} alt="React logo" />;
      case "Typescript":
        return <TechLogo key={tech} src={ts_logo} alt="Typescript logo" />;
      case "Node.js":
        return (
          <TechLogo key={tech} src={nodejs_logo} alt="Node.js logo" />
        );
      case "PostgreSQL":
        return (
          <TechLogo key={tech} src={postgres_logo} alt="PostgreSQL logo" />
        );
      case "Golang":
        return <TechLogo key={tech} src={golang_logo} alt="Golang logo" />;
      case "Svelte":
        return <TechLogo key={tech} src={svelte_logo} alt="Svelte logo" />;
      default:
        return (
          <TechLogo key="default" src={react_logo} alt="React logo" />
        );
    }
  };
  // Webiste Image Switch
  const webImgSwitch = (name: string) => {
    switch (name) {
      case "Audio Engineering Website":
        return audio_engineer_home;
      case "Artist Portfolio & Shop":
        return artist_store;
      case "My Website":
        return my_portfolio_home;
      default:
        return coming_soon;
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
  return (
    <SliderSection>
      {transitions((styles, i) => (
        <>
          <NavigateArrow src={left_arrow} onClick={() => prevProject()} />
          <InfoDiv style={styles} key={i}>
            <SiteImg
              src={webImgSwitch(
                projects[
                  i <= projects.length - 1 ? i : projects.length - 1
                ].name
              )}
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
            </InfoTextDiv>
          </InfoDiv>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={
              projects[i <= projects.length - 1 ? i : projects.length - 1]
                .link
            }
          >
            <ExternalLink src={external_link} />
          </a>
          <NavigateArrow src={right_arrow} onClick={() => nextProject()} />
        </>
      ))}
    </SliderSection>
  );
};

export default ProjectsSlider;