import { render, screen } from "../utils/test-utils";
import { ErrorFallback } from "../components/error/ErrorFallback";

test("check elements presence", () => {
  const message = "Il y a un problème de connexion";
  render(
    <ErrorFallback error={Error(message)} resetErrorBoundary={() => {}} />
  );
  expect(screen.getByAltText("Icon de prudence")).toBeInTheDocument();
  expect(screen.getByText("Une erreur s'est produite !")).toBeInTheDocument();
  expect(screen.getByText(message)).toBeInTheDocument();
  expect(
    screen.getByRole("button", {
      name: "Revenir à la page d'accueil",
    })
  ).toBeInTheDocument();
});
