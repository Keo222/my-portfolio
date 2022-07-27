import { useState, useEffect, useRef, KeyboardEvent } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

// Components
import { ProjectsCarousel, CarouselTicks } from "../components/Carousels";
import LongProjDesc from "components/LongProjDesc";

// Project Arrays
import { clientProjects, personalProjects } from "../jsonDB/projects";

const PortfolioPageContainer = styled.div``;

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
    props.bColor ? props.theme.color.highlight1 : props.theme.color.highlight2};
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

const LongDescSection = styled.section`
  width: clamp(260px, 80%, 900px);
  margin-inline: auto;
`;
const SectionTitle = styled.h2<{ mainHighlight: boolean }>`
  font-size: 2.6rem;
  text-decoration: underline;
  color: ${(props) =>
    props.mainHighlight === true
      ? props.theme.color.highlight1
      : props.theme.color.highlight2};
  margin-bottom: 3rem;
`;

const Portfolio = () => {
  const updating = useRef(false);
  const [toggled, setToggled] = useState(true);
  const [currentProjNum, setCurrentProjNum] = useState(0);

  const handleToggle = (e?: KeyboardEvent<HTMLDivElement>) => {
    if (e) {
      if (e.key !== "Enter") {
        return;
      }
    }
    if (currentProjNum === 0) {
      setToggled((t) => !t);
    } else {
      updating.current = true;
      setCurrentProjNum(0);
    }
  };

  useEffect(() => {
    if (updating.current) {
      setToggled((t) => !t);
      updating.current = false;
    }
  }, [currentProjNum]);

  return (
    <PortfolioPageContainer>
      <Helmet>
        <title>Kyle Olsen: Portfolio</title>
        <meta
          name="description"
          content="Kyle Olsen is a web developer in the Portland, Oregon area. Kyle Olsen is a fullstack web developer focusing on React.js, Typescript,ß Node.js, Express.js, and PostgreSQL. View his portfolio here."
        />
      </Helmet>
      <TopLineDiv>
        <ToggleDiv>
          <ToggleDescriptor>Client Projects</ToggleDescriptor>
          <Toggle
            bColor={toggled}
            onClick={() => handleToggle()}
            onKeyDown={(e) => handleToggle(e)}
            role="switch"
            title="Toggle between client projects and personal projects."
            aria-label="Toggle between client projects and personal projects."
            aria-checked={toggled ? "true" : "false"}
            tabIndex={0}
          >
            <ToggleBall pos={toggled} />
          </Toggle>
          <ToggleDescriptor>Personal Projects</ToggleDescriptor>
        </ToggleDiv>
      </TopLineDiv>
      <ProjectsCarousel
        projects={toggled ? clientProjects : personalProjects}
        currentProj={currentProjNum}
        setCurrentProj={setCurrentProjNum}
        toggled={toggled}
      />
      <LongDescSection>
        <SectionTitle mainHighlight={true}>Client Projects</SectionTitle>
        {clientProjects.map((p) => (
          <LongProjDesc
            mainHighlight={true}
            projName={p.name}
            projId={p.id}
            tech={p.tech}
            link={p.link}
            mainImg={p.mainImg}
            longDesc={p.long_description}
          />
        ))}
        <SectionTitle mainHighlight={false}>Personal Projects</SectionTitle>
        {personalProjects.map((p) => (
          <LongProjDesc
            mainHighlight={false}
            projName={p.name}
            projId={p.id}
            tech={p.tech}
            link={p.link}
            mainImg={p.mainImg}
            longDesc={p.long_description}
          />
        ))}
      </LongDescSection>
    </PortfolioPageContainer>
  );
};

export default Portfolio;
