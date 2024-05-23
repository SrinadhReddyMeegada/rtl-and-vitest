import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("Terms and conditions", () => {
  const renderComponent = () => {
    render(<TermsAndConditions />);

    return {
      heading: screen.getByRole("heading"),
      button: screen.getByRole("button"),
      checkbox: screen.getByRole("checkbox"),
    };
  };
  it("should render the content", () => {
    const { heading, button, checkbox } = renderComponent();

    expect(heading).toHaveTextContent("Terms & Conditions");
    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });
  it("should be render button when user clicks on checkbox", async () => {
    const { checkbox } = renderComponent();
    const user = userEvent.setup();
    await user.click(checkbox);
    expect(checkbox).toBeEnabled();
  });
});
