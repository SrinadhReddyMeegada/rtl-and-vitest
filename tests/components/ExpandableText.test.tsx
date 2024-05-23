import { render, screen } from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText";

describe("Expandable text need to be rendered", () => {
  it("should be render short text", () => {
    const shortText = "ssssssssssss";
    render(<ExpandableText text={shortText} />);
    expect(screen.getByText(shortText)).toBeInTheDocument();
  });

  it("should be render long text", () => {
    const longText = "a".repeat(256);
    render(<ExpandableText text={longText} />);
    const truncatedText = longText.substring(0, 255) + "...";
    expect(screen.getByText(truncatedText)).toBeInTheDocument();
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(/more/i);
  });
});
