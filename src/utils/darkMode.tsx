import { LuHeadphones } from "react-icons/lu";
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
  const toggleBgSeparator =
    isDarkMode && isDarkMode === true ? "dark:bg-white" : "bg-black";
  return {
    isDarkMode,
    toggleMode,
    toggleBg,
    toggleBgFooter,
    toggleBgSeparator,
  };
};

export const ToggleText = () => {
  const { isDarkMode} = useDarkMode();
  const toggleText =
    isDarkMode && isDarkMode === true ? "dark:text-white" : "text-black";
  return { toggleText };
};

export const ToggleLogo = () => {
  const { isDarkMode } = useDarkMode();
  const { toggleText } = ToggleText();
  return (
    <>
      {isDarkMode && isDarkMode === true ? (
        <a href="/">
          <div className="flex flex-col justify-center items-center w-30">
            <div className="text-orange h-10 border-4 rounded-full p-2">
              <LuHeadphones className="text-orange w-15" />
            </div>
            <p className={`font-black ${toggleText}`}>Listen to me</p>
          </div>
        </a>
      ) : (
        <a href="/">
          <div className="flex flex-col justify-center items-center">
            <div className="text-orange h-10 border-4 rounded-full p-2">
              <LuHeadphones className="text-orange w-15" />
            </div>
            <p className="font-black">Listen to me</p>
          </div>
        </a>
      )}
    </>
  );
};

export const ToggleWidget = () => {
  const { isDarkMode } = useDarkMode();
  const toggleWidget = isDarkMode && isDarkMode === true ? "dark" : "light";
  return { isDarkMode, toggleWidget };
}