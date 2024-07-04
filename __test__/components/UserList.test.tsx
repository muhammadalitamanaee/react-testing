import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";

describe("the UserList Component", () => {
  it("should render component with no users ", () => {
    render(<UserList users={[]} />);
    expect(screen.getByText(/no users available./i)).toBeInTheDocument();
  });
  it("should render component with users ", () => {
    const users = [
      {
        id: 12433,
        name: "mamad",
        isAdmin: false,
      },
      {
        id: 124344,
        name: "ali",
        isAdmin: true,
      },
      {
        id: 12434,
        name: "hasan",
        isAdmin: true,
      },
    ];

    render(<UserList users={users} />);

    users.map((item, index) => {
      const links = screen.getAllByRole("link");
      expect(links.at(index)).toBeInTheDocument();
      expect(links).toHaveLength(3);
      expect(links.at(index)).toHaveAttribute(
        "href",
        `/users/${users.at(index)?.id}`
      );
    });
  });
});
