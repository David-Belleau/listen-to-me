import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavBarMain from "../components/navBarMain/NavBarMain";

test("open dropdown 'Mon compte'", () => {
  render(<NavBarMain />);
  const myAccount = screen.getByRole("button", { name: "Mon compte" });
  expect(myAccount).toBeInTheDocument();
  userEvent.click(myAccount);
  expect(
    screen.getByRole("link", { name: "Mes informations" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "Se déconnecter" })
  ).toBeInTheDocument();
});
