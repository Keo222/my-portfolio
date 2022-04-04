import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

// Components
import ProjectsSlider from "../components/ProjectsSlider";
import NavTicks from "../components/NavTicks";

// Project Arrays
import { clientProjects, personalProjects } from "../jsonDB/projects";

const PortfolioPageContainer = styled.div`
  display: grid;
  height: calc(100vh - 173px);
  grid-template-rows: 2fr clamp(150px, 30vw, 500px) 2fr;
`;

const TopLineDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ToggleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ToggleDescriptor = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  margin-inline: 1rem;
  line-height: 3rem;
`;

const Toggle = styled.div<{ bColor: boolean }>`
  width: 6rem;
  height: 3rem;
  border-radius: 20px;
  background-color: ${(props) =>
    props.bColor
      ? props.theme.color.highlight1
      : props.theme.color.highlight2};
  display: flex;
  align-items: center;
  transition: all 0.4s;

  &:hover {
    cursor: pointer;
  }
`;

const ToggleBall = styled.div<{ pos: boolean }>`
  border-radius: 50%;
  height: 2.4rem;
  width: 2.4rem;
  transform: translateX(${(props) => (props.pos ? "3px" : "3.2rem")});
  background-color: ${(props) => props.theme.color.primary1};
  transition: all 0.4s;
`;

const NavTicksDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Portfolio = () => {
  const updating = useRef(false);
  const [toggle, setToggle] = useState(true);
  const [currentProjNum, setCurrentProjNum] = useState(0);

  const handleToggle = () => {
    console.log("handleToggle");
    if (currentProjNum === 0) {
      setToggle((t) => !t);
    } else {
      updating.current = true;
      setCurrentProjNum(0);
    }
  };

  useEffect(() => {
    console.log("currentProjNum updated:", currentProjNum);
    if (updating.current) {
      setToggle((t) => !t);
      updating.current = false;
    }
  }, [currentProjNum]);

  return (
    <PortfolioPageContainer>
      <TopLineDiv>
        <ToggleDiv>
          <ToggleDescriptor>Client Projects</ToggleDescriptor>
          <Toggle
            bColor={toggle}
            onClick={() => handleToggle()}
            role="switch"
            aria-label="Toggle between client projects and personal projects."
            aria-checked={toggle ? "true" : "false"}
          >
            <ToggleBall pos={toggle} />
          </Toggle>
          <ToggleDescriptor>Personal Projects</ToggleDescriptor>
        </ToggleDiv>
      </TopLineDiv>
      <ProjectsSlider
        projects={toggle ? clientProjects : personalProjects}
        currentProj={currentProjNum}
        setCurrentProj={setCurrentProjNum}
      />
      <NavTicksDiv>
        <NavTicks
          projects={toggle ? clientProjects : personalProjects}
          setCurrentProj={setCurrentProjNum}
          currentProj={currentProjNum}
          projType={toggle}
        />
      </NavTicksDiv>
    </PortfolioPageContainer>
  );
};

export default Portfolio;
