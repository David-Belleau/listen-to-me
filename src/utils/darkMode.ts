import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import { toggleDarkMode } from "../redux/features/darkModeSlice";
import { RootState } from "./types";

export const useDarkMode = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state: RootState) => state.darkMode.value);

  const toggleMode = () => {
    // delete darkMode class in localStorage
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    } else {
      // add darkMode class in localStorage
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    }
    // toggle true/false value
    dispatch(toggleDarkMode());
  };
  return {
    isDarkMode,
    toggleMode,
  };
};

export const ToggleBg = () => {
  const { isDarkMode, toggleMode } = useDarkMode();
  const toggleBg =
    isDarkMode && isDarkMode === true ? "dark:bg-black" : "bg-white";
  const toggleBgFooter =
    isDarkMode && isDarkMode === true ? "dark:bg-black" : "bg-gray";
  const toggleBgSeparator = isDarkMode && isDarkMode === true ? "dark:bg-orange" : "";
  return {
    isDarkMode,
    toggleMode,
    toggleBg,
    toggleBgFooter,
    toggleBgSeparator,
  };
};

export const ToggleText = () => {
  const { isDarkMode } = useDarkMode();
  const toggleText =
    isDarkMode && isDarkMode === true ? "dark:text-white" : "text-black";
  return { toggleText };
};

export const ToggleWidget = () => {
  const { isDarkMode } = useDarkMode();
  const toggleWidget = isDarkMode && isDarkMode === true ? "dark" : "light";
  return { isDarkMode, toggleWidget };
};

export const ToggleButton = () => {
  const { isDarkMode } = useDarkMode();
  const toggleButton =
    isDarkMode && isDarkMode === true
      ? "dark:bg-orange dark:text-white dark:hover:bg-white dark:hover:text-black dark:focus:bg-white dark:focus:text-orange"
      : "text-white bg-black hover:bg-orange hover:text-black focus:bg-black focus:text-orange";
  return { toggleButton };
};
