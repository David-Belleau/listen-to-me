import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ToggleBg, ToggleText } from "../../utils/darkMode";
import { LuHeadphones } from "react-icons/lu";

export const Header = () => {
  const { isDarkMode, toggleMode } = ToggleBg();
  const { toggleText } = ToggleText();

  return (
    <div className="px-4 sm:px-6">
      <div className="flex items-center justify-between py-4 md:space-x-10">
        <div className="flex justify-start">
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
        </div>
        <button onClick={() => toggleMode()}>
          {isDarkMode && isDarkMode === true ? (
            <MdLightMode className="text-orange" size={30}  aria-label="light mode"/>
          ) : (
            <MdDarkMode className="text-orange" size={30} aria-label="dark mode" />
          )}
        </button>
      </div>
    </div>
  );
};
