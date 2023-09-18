import { render, screen } from "../utils/test-utils";
import { AuthButton } from "../components/auth/AuthButton";
import userEvent from "@testing-library/user-event";

test("check elements presence", () => {
  render(<AuthButton handleClick={() => {}} />);
  expect(screen.getByLabelText("bg-site")).toBeInTheDocument();
  expect(screen.getByText("Listen to me")).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "Se connecter" })
  ).toBeInTheDocument();
});

test("call handleClick function when button is clicked", () => {
  const handleClick = jest.fn();
  render(<AuthButton handleClick={handleClick} />);
  const button = screen.getByRole("button", { name: "Se connecter" });
  expect(button).toBeInTheDocument();
  userEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
