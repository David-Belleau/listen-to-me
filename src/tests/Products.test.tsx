import { render, screen } from "../utils/test-utils";
import { Products } from "../components/products/Products";

jest.mock("../components/products/SwiperTemplate.tsx", () => {
  return jest.fn();
});
jest.mock("swiper", () => ({
  Navigation: jest.fn(),
  Pagination: jest.fn(),
}));
jest.mock("swiper/react", () => ({
  SwiperSlide: jest.fn(),
}));

test("check titles presence", () => {
  render(<Products />);
  expect(
    screen.getByRole("heading", { name: "Top titres" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Top albums" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Top playlists" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Top podcasts" })
  ).toBeInTheDocument();
});
