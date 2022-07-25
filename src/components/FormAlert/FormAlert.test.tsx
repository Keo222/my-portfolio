import { render, screen } from "@testing-library/react";
import FormAlert from ".";

describe("FormAlert components correct message displayed", () => {
  it("displays default 'Success' message", () => {
    render(<FormAlert alertType="success" />);
    const successAlert = screen.getByText(/Success!/i);
    expect(successAlert).toBeInTheDocument();
  });
  it("displays default 'Error' message", () => {
    render(<FormAlert alertType="error" />);
    const successAlert = screen.getByText(/Error/i);
    expect(successAlert).toBeInTheDocument();
  });
  it("displays custom message when alertType === 'success'", () => {
    render(<FormAlert alertMsg="custom-success" alertType="success" />);
    const successAlert = screen.getByText(/custom-success/i);
    expect(successAlert).toBeInTheDocument();
  });
  it("displays custom message when alertType === 'error'", () => {
    render(<FormAlert alertMsg="custom-error" alertType="success" />);
    const successAlert = screen.getByText(/custom-error/i);
    expect(successAlert).toBeInTheDocument();
  });
});
