import { render, screen } from "../utils/test-utils";
import userEvent from "@testing-library/user-event";
import { Header } from "../components/header/Header";

test("check elements presence", () => {
  render(<Header />);
  expect(screen.getByText("Listen to me")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "dark mode" })).toBeInTheDocument();
});

test("switch dark/light mode icons", () => {
  render(<Header />);
  const toggleButton = screen.getByRole("button", { name: "dark mode" });
  expect(toggleButton).toBeInTheDocument();
  userEvent.click(toggleButton);
  expect(screen.getByLabelText("light mode")).toBeInTheDocument();
});
