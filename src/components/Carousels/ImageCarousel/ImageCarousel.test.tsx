import { render, screen } from "@testing-library/react";
import ImageCarousel from ".";

// Personal Images
import { personalImages } from "jsonDB";
// Styled-Components Workaround
import { ThemeProvider } from "styled-components";
import { theme } from "styled/styled";

describe("ImageCarousel Component", () => {
  it("renders", () => {
    render(
      <ThemeProvider theme={theme}>
        <ImageCarousel images={personalImages} />
      </ThemeProvider>
    );
    const sliderComponentImg = screen.getByTestId("imgContainer-testId");
    expect(sliderComponentImg).toBeInTheDocument();
  });
});
