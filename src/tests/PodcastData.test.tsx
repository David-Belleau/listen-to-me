import { render, screen } from "../utils/test-utils";
import { PodcastData } from "../components/products/PodcastData";

test("check elements presence", () => {
  render(<PodcastData />);
  expect(screen.getByText("Liste des podcasts")).toBeInTheDocument();
});
