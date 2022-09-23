import { render, screen } from "@testing-library/react";
import LongProjDesc from ".";

// styled-components work arounds
import { ThemeProvider } from "styled-components";
import { theme } from "styled/themes";

// image
import coming_soonx600 from "images/websites/coming_soonx600.jpg";
import coming_soonx900 from "images/websites/coming_soonx900.jpg";
import coming_soonx1200 from "images/websites/coming_soonx1200.jpg";

const testImgs = {
  600: coming_soonx600,
  900: coming_soonx900,
  1200: coming_soonx1200,
};

describe("LongProjDesc component", () => {
  it("has the correct project name", () => {
    render(
      <ThemeProvider theme={theme}>
        <LongProjDesc
          mainHighlight={true}
          projName="Custom Proj Name"
          projId="tandemly"
          tech={["React"]}
          link="https://www.google.com/"
          imgs={testImgs}
          longDesc="Here is my long description for testing"
        />
      </ThemeProvider>
    );
    const projComponent = screen.getByText(/Custom Proj Name/i);
    expect(projComponent).toBeInTheDocument();
  });

  it("has the correct link URL", () => {
    render(
      <ThemeProvider theme={theme}>
        <LongProjDesc
          mainHighlight={true}
          projName="Custom Proj Name"
          projId="tandemly"
          tech={["React"]}
          link="https://www.google.com/"
          imgs={testImgs}
          longDesc="Here is my long description for testing"
        />
      </ThemeProvider>
    );
    const projComponentLink = screen.getAllByRole("link");
    projComponentLink.every((link) =>
      expect(link).toHaveAttribute("href", "https://www.google.com/")
    );
  });

  it("has the correct project description", () => {
    render(
      <ThemeProvider theme={theme}>
        <LongProjDesc
          mainHighlight={true}
          projName="Custom Proj Name"
          projId="tandemly"
          tech={["React"]}
          link="https://www.google.com/"
          imgs={testImgs}
          longDesc="Here is my long description for testing"
        />
      </ThemeProvider>
    );
    const projComponentDesc = screen.getByText(
      /Here is my long description for testing/i
    );
    expect(projComponentDesc).toBeInTheDocument();
  });
});
