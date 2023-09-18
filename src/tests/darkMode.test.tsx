import { ToggleBg, useDarkMode } from "../utils/darkMode";
import { renderHook, act } from "@testing-library/react";
import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import { toggleDarkMode } from "../redux/features/darkModeSlice";
import { Providers } from "../utils/Providers";

jest.mock("../redux/app/hooks", () => ({
  useAppSelector: jest.fn(),
  useAppDispatch: jest.fn(),
}));

describe("useDarkMode", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    localStorage.clear();
  });
  test("toggle dark mode when isDarkMode is true", () => {
    const mockDispatch = jest.fn().mockName("dispatch");
    const mockIsDarkMode = true;
    const { result } = renderHook(() => useDarkMode(), { wrapper: Providers });
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useAppSelector as jest.Mock).mockReturnValue(mockIsDarkMode);
    act(() => {
      result.current.toggleMode();
    });
    expect(document.documentElement.classList.add).toHaveBeenCalledWith("dark");
    expect(localStorage.setItem).toHaveBeenCalledWith("darkMode", "true");
    expect(mockDispatch).toHaveBeenCalledWith(toggleDarkMode());
  });
  test("toggle dark mode when isDarkMode is false", () => {
    const mockDispatch = jest.fn();
    const mockIsDarkMode = false;
    const { result } = renderHook(() => useDarkMode(), { wrapper: Providers });
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useAppSelector as jest.Mock).mockReturnValue(mockIsDarkMode);
    act(() => {
      result.current.toggleMode();
    });
    expect(document.documentElement.classList.remove).toHaveBeenCalledWith(
      "dark"
    );
    expect(localStorage.setItem).toHaveBeenCalledWith("darkMode", "false");
    expect(mockDispatch).toHaveBeenCalledWith(toggleDarkMode());
  });
});

describe("ToggleBg", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    localStorage.clear();
  });
  test("return correct values when isDarkMode is true", () => {
    const { result } = renderHook(() => ToggleBg(), { wrapper: Providers });
    act(() => {
      result.current.toggleMode();
    });
    expect(result.current.isDarkMode).toBe(true);
    expect(result.current.toggleMode).toBeInstanceOf(Function);
    expect(result.current.toggleBg).toBe("dark:bg-black");
    expect(result.current.toggleBgFooter).toBe("dark:bg-black");
    expect(result.current.toggleBgSeparator).toBe("dark:bg-white");
  });

  test("return correct values when isDarkMode is false", () => {
    const { result } = renderHook(() => ToggleBg(), { wrapper: Providers });
    act(() => {
      result.current.toggleMode();
    });
    expect(result.current.isDarkMode).toBe(false);
    expect(result.current.toggleMode).toBeInstanceOf(Function);
    expect(result.current.toggleBg).toBe("bg-white");
    expect(result.current.toggleBgFooter).toBe("bg-gray");
    expect(result.current.toggleBgSeparator).toBe("bg-black");
  });
});
