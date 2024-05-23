import { render, screen } from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("Expandable text need to be rendered", () => {
  const limit = 255;
  const longText = "a".repeat(limit + 1);
  const truncatedText = longText.substring(0, limit) + "...";
  it("should be render short text", () => {
    const shortText = "ssssssssssss";
    render(<ExpandableText text={shortText} />);
    expect(screen.getByText(shortText)).toBeInTheDocument();
  });

  it("should be render long text", () => {
    render(<ExpandableText text={longText} />);

    expect(screen.getByText(truncatedText)).toBeInTheDocument();
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(/more/i);
  });
  it("should be render when user clicks on button", async () => {
    render(<ExpandableText text={longText} />);
    const user = userEvent.setup();
    const button = screen.getByRole("button");
    await user.click(button);
    expect(screen.getByText(longText)).toBeInTheDocument();
    expect(button).toHaveTextContent(/less/i);
  });
  it("should be render truncated text when user clicks on show les button", async () => {
    render(<ExpandableText text={longText} />);
    const user = userEvent.setup();
    const showMoreButton = screen.getByRole("button", { name: /more/i });
    await user.click(showMoreButton);

    const showLessButton = screen.getByRole("button", { name: /less/i });
    await user.click(showLessButton);
    expect(screen.getByText(truncatedText)).toBeInTheDocument();
  });
});
