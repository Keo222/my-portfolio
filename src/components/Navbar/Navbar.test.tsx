import { render, screen } from "@testing-library/react";
import Navbar from ".";
// React Router
import { BrowserRouter as Router } from "react-router-dom";
// Styled Components
import { ThemeProvider } from "styled-components";
import { theme } from "styled/themes";
describe("Navbar Component", () => {
  it("renders", () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
        </Router>
      </ThemeProvider>
    );
    const navElem = screen.getByTestId("nav-testId");
    expect(navElem).toBeInTheDocument();
  });
});
