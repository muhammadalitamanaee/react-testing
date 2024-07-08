import { getByRole, render, screen } from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("the expandable text", () => {
  it("should render the article fully beacuse it has less than 255 character", () => {
    const text = "short text";
    render(<ExpandableText text={text} />);
    const under255Return = screen.getByRole("article");
    expect(under255Return).toHaveTextContent(text);
  });
  it("should expand text when btn is clicked ", async () => {
    const { click } = userEvent.setup();
    const text = "a".repeat(256);
    console.log(text.split("").length);
    render(<ExpandableText text={text} />);
    const showMoreBtn = screen.getByRole("button");
    expect(showMoreBtn).toHaveTextContent(/more/i);
    await click(showMoreBtn);
    expect(showMoreBtn).toHaveTextContent(/less/i);
    const showlessBtn = screen.getByRole("button", { name: /less/i });
    expect(showlessBtn).toBeInTheDocument();
    await click(showlessBtn);
    expect(showMoreBtn).toBeInTheDocument();
  });
});
