import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("Terms and conditions", () => {
  it("should render the content", () => {
    render(<TermsAndConditions />);
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("Terms & Conditions");

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    const button = screen.getByRole("button", { name: /submit/i });
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
  it("should be render button when user clicks on checkbox", async () => {
    render(<TermsAndConditions />);

    const checkBox = screen.getByRole("checkbox");
    const user = userEvent.setup();
    screen.debug();
    await user.click(checkBox);
    expect(checkBox).toBeEnabled();
  });
});
