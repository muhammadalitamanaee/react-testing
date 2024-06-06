import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";

describe("the new test", () => {
  it("should render Hello with the name when name is provided", () => {
    render(<Greet name="mamad" />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/hello mamad/i);
  });
});
