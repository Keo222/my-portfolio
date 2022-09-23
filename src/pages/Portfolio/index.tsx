import { useState, useEffect, useRef, KeyboardEvent } from "react";
import { Helmet } from "react-helmet";

// Components
import { ProjectsCarousel } from "components/Carousels";
import ProjCard from "components/ProjCard";

// Project Arrays
import { clientProjects, personalProjects } from "jsonDB/projects";

// Styled Components
import {
  TopLineDiv,
  ToggleSection,
  ToggleDescriptor,
  Toggle,
  ToggleBall,
  LongDescSection,
  SectionTitle,
} from "./styled";

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
    <div>
      <Helmet>
        <title>Kyle Olsen: Portfolio</title>
        <meta
          name="description"
          content="Kyle Olsen is a web developer in the Portland, Oregon area. Kyle Olsen is a fullstack web developer focusing on React.js, Typescript,ß Node.js, Express.js, and PostgreSQL. View his portfolio here."
        />
      </Helmet>
      <TopLineDiv>
        <ToggleSection aria-label="toggle controls">
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
        </ToggleSection>
      </TopLineDiv>
      <section aria-label="project carousel">
        <ProjectsCarousel
          projects={toggled ? clientProjects : personalProjects}
          currentProj={currentProjNum}
          setCurrentProj={setCurrentProjNum}
          toggled={toggled}
        />
      </section>
      <LongDescSection aria-label="long project descriptions">
        <section aria-labelledby="client-projects-header">
          <SectionTitle mainHighlight={true} id="client-projects-header">
            Client Projects
          </SectionTitle>
          {clientProjects.map((p) => (
            <ProjCard
              mainHighlight={true}
              projName={p.name}
              projId={p.id}
              tech={p.tech}
              link={p.link}
              imgs={p.imgs}
              longDesc={p.long_description}
            />
          ))}
        </section>
        <section aria-labelledby="personal-projects-header">
          <SectionTitle
            id="personal-projects-header"
            mainHighlight={false}
          >
            Personal Projects
          </SectionTitle>
          {personalProjects.map((p) => (
            <ProjCard
              mainHighlight={false}
              projName={p.name}
              projId={p.id}
              tech={p.tech}
              link={p.link}
              imgs={p.imgs}
              longDesc={p.long_description}
            />
          ))}
        </section>
      </LongDescSection>
    </div>
  );
};

export default Portfolio;
