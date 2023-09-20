import { render, screen } from "../utils/test-utils";
import { PlaylistData } from '../components/products/PlaylistData';

test("check elements presence", () => {
  render(<PlaylistData />);
  expect(screen.getByText("Liste des titres")).toBeInTheDocument();
});
