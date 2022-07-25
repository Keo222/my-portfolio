import { render, screen } from "@testing-library/react";
import FormAlert from "./FormAlert";

it("renders the correct alert message", () => {
  render(<FormAlert alertMsg="Test Alert Message" alertType="success" />);
  const alertMessageElement = screen.getByText(/Test Alert Message/i);
  expect(alertMessageElement).toBeInTheDocument();
});
