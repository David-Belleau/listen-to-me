import { render, screen } from "../utils/test-utils";
import { AlbumData } from "../components/products/AlbumData";

test("check elements presence", () => {
  render(<AlbumData />);
  expect(screen.getByText("Liste des titres")).toBeInTheDocument();
});








