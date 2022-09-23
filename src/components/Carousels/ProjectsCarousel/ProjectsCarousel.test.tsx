import { screen, render } from "@testing-library/react";
import ProjectsCarousel from ".";

// Projects for slider
import {
  clientProjects,
  personalProjects,
} from "../../../jsonDB/projects";

// styled-components work arounds
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styled/themes";

const personalProjArrLen = personalProjects.length;
const clientProjArrLen = personalProjects.length;

describe("ProjectsCarousel component", () => {
  for (let i = 0; i < personalProjArrLen; i++) {
    it(`can render slide ${i} of ${personalProjArrLen} of personal projects`, () => {
      render(
        <ThemeProvider theme={theme}>
          <ProjectsCarousel
            projects={personalProjects}
            currentProj={i}
            setCurrentProj={() => 1}
            toggled={true}
          />
        </ThemeProvider>
      );
      const slide = screen.getByTestId("slide-testId");
      expect(slide).toBeInTheDocument();
    });
  }
  for (let i = 0; i < clientProjArrLen; i++) {
    it(`can render slide ${i} of ${clientProjArrLen} of client projects`, () => {
      render(
        <ThemeProvider theme={theme}>
          <ProjectsCarousel
            projects={clientProjects}
            currentProj={i}
            setCurrentProj={() => 1}
            toggled={true}
          />
        </ThemeProvider>
      );
      const slide = screen.getByTestId("slide-testId");
      expect(slide).toBeInTheDocument();
    });
  }
});
