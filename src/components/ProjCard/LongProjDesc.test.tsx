import { render, screen } from "@testing-library/react";
import LongProjDesc from ".";

// styled-components work arounds
import { ThemeProvider } from "styled-components";
import { theme } from "styled/styled";

// image
import coming_soon from "images/websites/coming_soon.jpg";

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
          mainImg={coming_soon}
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
          mainImg={coming_soon}
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
          mainImg={coming_soon}
          longDesc="Here is my long description for testing"
        />
      </ThemeProvider>
    );
    const projComponentDesc = screen.getByText(
      /Here is my long description for testing/i
    );
    expect(projComponentDesc).toBeInTheDocument();
  });

  it("has the correct img src", () => {
    render(
      <ThemeProvider theme={theme}>
        <LongProjDesc
          mainHighlight={true}
          projName="Custom Proj Name"
          projId="tandemly"
          tech={["React"]}
          link="https://www.google.com/"
          mainImg={coming_soon}
          longDesc="Here is my long description for testing"
        />
      </ThemeProvider>
    );
    const projImg = document.querySelector("img");
    expect(projImg).toHaveAttribute("src", coming_soon);
  });
});
