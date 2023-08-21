import { render, screen } from "../utils/test-utils"
import { Products } from "../components/products/Products";

jest.mock("../components/products/SliderTemplate.tsx", () => {
  return jest.fn();
});
jest.mock("swiper", () => ({
  Navigation: jest.fn(),
  Pagination: jest.fn(),
}));
jest.mock("swiper/react", () => ({
  SwiperSlide: jest.fn(),
}));

describe("check elements presence", () => {
  test("check titles presence", () => {
    render(<Products/>);
    expect(
      screen.getByRole("heading", { name: "Top artistes" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Top morceaux" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Top albums" })
    ).toBeInTheDocument();
  });

  /* test("check links presence 'Voir tous les morceaux' and 'Voir tous les albums'", () => {
    render(<Products />);
    expect(
      screen.getByRole("link", { name: "Voir tous les morceaux" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Voir tous les albums" })
    ).toBeInTheDocument();
  }); */
});
