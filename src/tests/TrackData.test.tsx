import { render, screen } from "../utils/test-utils";
import { TrackData } from "../components/products/TrackData";

test("check elements presence", () => {
  render(<TrackData />);
  expect(screen.getByText("Titre à écouter")).toBeInTheDocument();
});
