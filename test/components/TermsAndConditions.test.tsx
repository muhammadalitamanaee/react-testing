import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvent, { userEvent } from "@testing-library/user-event";

describe("TermsAndConditions", () => {
  it("should just render the component", () => {
    render(<TermsAndConditions />);
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent(/Terms & Conditions/i);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
    expect(btn).toBeDisabled();
  });
  it("should enable the btn when the checkbox is checked", async () => {
    render(<TermsAndConditions />);
    const { click } = userEvent.setup();

    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent(/Terms & Conditions/i);

    const checkbox = screen.getByRole("checkbox");
    await click(checkbox);

    const btn = screen.getByRole("button");
    expect(btn).toBeEnabled();
  });
});
