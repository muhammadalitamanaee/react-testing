import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";

describe("group", () => {
  it("test the component for rendering the name of the user", () => {
    const user = { id: 323232323, name: "muhammadAli", isAdmin: false };

    render(<UserAccount user={user} />);
    const nameOfTheUser = screen.getByText(/muhammadali/i);
    expect(nameOfTheUser).toHaveTextContent(user.name);
  });

  it("test the component for a non Admin", () => {
    render(
      <UserAccount
        user={{ id: 323232323, name: "muhammadAli", isAdmin: false }}
      />
    );
    const theEditBtn = screen.queryByRole("button");
    expect(theEditBtn).not.toBeInTheDocument();
  });

  it("test the component for Admin", () => {
    render(
      <UserAccount
        user={{ id: 323232323, name: "muhammadAli", isAdmin: true }}
      />
    );
    const theEditBtn = screen.getByRole("button");
    expect(theEditBtn).toBeInTheDocument();
    expect(theEditBtn).toHaveTextContent(/edit/i);
  });
});
