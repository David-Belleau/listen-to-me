import { render, screen } from "../utils/test-utils";
import userEvent from "@testing-library/user-event";
import {NavBarMain} from "../components/navBarMain/NavBarMain";

test("check elements presence",()=>{
  render(<NavBarMain />);
  expect(screen.getByRole('link', {name: 'logo du site'})).toBeInTheDocument()
  expect(screen.getByRole('searchbox', {name: 'Search'})).toBeInTheDocument()
  expect(screen.getByRole('link', {name: 'Panier'})).toBeInTheDocument()
  expect(screen.getByRole("button", { name: "Mon compte" })).toBeInTheDocument();
})

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
