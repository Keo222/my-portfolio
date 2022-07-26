import { render, screen } from "@testing-library/react";
import ImageSlider from ".";

// Personal Images
import { personalImages } from "jsonDB";
// Styled-Components Workaround
import { ThemeProvider } from "styled-components";
import { theme } from "styled/styled";

describe("ImageSlider Component", () => {
  it("renders", () => {
    render(
      <ThemeProvider theme={theme}>
        <ImageSlider images={personalImages} />
      </ThemeProvider>
    );
    const sliderComponentImg = screen.getByTestId("imgContainer-testId");
    expect(sliderComponentImg).toBeInTheDocument();
  });
});
