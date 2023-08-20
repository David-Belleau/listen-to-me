import { render, screen } from "../utils/test-utils";
import { PageNotFound } from "../components/error/PageNotFound";

test("check elements presence", () => {
  render(<PageNotFound />);
  expect(
    screen.getByRole("img", { name: "Icon de prudence" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Erreur 404" })
  ).toBeInTheDocument();
  expect(
    screen.getByText("La page que vous recherchez n'existe pas !")
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "Revenir à la page d'accueil" })
  ).toBeInTheDocument();
});
