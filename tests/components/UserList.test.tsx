import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";

describe("User List", () => {
  it("should be render the text when user array is empty", () => {
    render(<UserList users={[]} />);
    screen.debug();
    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });

  it("should be render list of users", () => {
    const userList = [
      { id: 1, name: "John" },
      { id: 2, name: "cena" },
    ];
    render(<UserList users={userList} />);
    userList.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });
      screen.debug();
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
