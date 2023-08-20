import { render, screen } from "../utils/test-utils";
import {Contact} from "../components/contact/Contact";

test("check elements presence", () => {
  render(<Contact />);
  expect(
    screen.getByRole("heading", { name: "Contactez-nous" })
  ).toBeInTheDocument();
  expect(
    screen.getByAltText("L'équipe fictive de Listen to me")
  ).toBeInTheDocument();
  expect(screen.getByRole("textbox", { name: "Prénom" })).toBeInTheDocument();
  expect(screen.getByRole("textbox", { name: "Nom" })).toBeInTheDocument();
  expect(
    screen.getByRole("textbox", { name: "Adresse e-mail" })
  ).toBeInTheDocument();
  expect(screen.getByRole("textbox", { name: "Message" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Envoyer" })).toBeInTheDocument();
});
