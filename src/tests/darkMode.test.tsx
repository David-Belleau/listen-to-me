import { useDarkMode } from "../utils/darkMode";
import { renderHook, act } from "../utils/test-utils";
import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import { toggleDarkMode } from "../redux/features/darkModeSlice";
import { Providers } from "../utils/Providers";

jest.mock("../redux/app/hooks", () => ({
  useAppSelector: jest.fn(),
  useAppDispatch: jest.fn(),
}));

describe("useDarkMode() function", () => {
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        setItem: jest.fn(),
        removeItem: jest.fn(),
        clear: jest.fn(),
      },
    });
    document.documentElement.classList.add = jest.fn();
    document.documentElement.classList.remove = jest.fn();
  });
  afterEach(() => {
    jest.resetAllMocks();
    localStorage.clear();
  });

  test("useDarkMode() default values", () => {
    const { result } = renderHook(() => useDarkMode(), { wrapper: Providers });
    // isDarkMode is undefined
    expect(result.current).toEqual({
      toggleMode: expect.any(Function),
    });
  });
  test("toggle dark mode when isDarkMode is true", () => {
    const mockDispatch = jest.fn();
    const mockIsDarkMode = false;
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useAppSelector as jest.Mock).mockReturnValue(mockIsDarkMode);
    const { result } = renderHook(() => useDarkMode(), { wrapper: Providers });
    act(() => {
      result.current.toggleMode();
    });
    expect(mockDispatch).toHaveBeenCalledWith(toggleDarkMode());
    expect(document.documentElement.classList.add).toHaveBeenCalledWith("dark");
    expect(localStorage.setItem).toHaveBeenCalledWith("darkMode", "true");
  });
  test("toggle light mode when isDarkMode is false", () => {
    const mockDispatch = jest.fn();
    const mockIsDarkMode = true;
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useAppSelector as jest.Mock).mockReturnValue(mockIsDarkMode);
    const { result } = renderHook(() => useDarkMode(), { wrapper: Providers });
    act(() => {
      result.current.toggleMode();
    });
    expect(mockDispatch).toHaveBeenCalledWith(toggleDarkMode());
    expect(document.documentElement.classList.remove).toHaveBeenCalledWith(
      "dark"
    );
    expect(localStorage.setItem).toHaveBeenCalledWith("darkMode", "false");
  });
});
