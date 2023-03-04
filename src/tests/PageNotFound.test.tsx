import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import PageNotFound from "../components/error/PageNotFound";

test("check elements presence", () => {
  render(
    <Router>
      <PageNotFound />
    </Router>
  );

  expect(
    screen.getByRole("img", { name: "Icon de prudence" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Erreur 404" })
  ).toBeInTheDocument();
  expect(screen.getByText("Aucune musique par ici !")).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "Revenir à la page d'accueil" })
  ).toBeInTheDocument();
});
