import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ToggleBg, ToggleLogo } from '../../utils/darkMode';

export const Header = () => {
  const { isDarkMode, toggleMode } = ToggleBg();

  return (
    <div className="mx-auto max-w-full px-4 sm:px-6">
      <div className="flex items-center justify-between py-4 md:space-x-10">
        <div className="flex justify-start">
          <ToggleLogo/>
        </div>
        <button onClick={() => toggleMode()}>
          {isDarkMode && isDarkMode === true ? (
            <MdLightMode className="text-orange" size={30} title="light mode" aria-label="light mode"/>
          ) : (
            <MdDarkMode className="text-orange" size={30} title="dark mode"  />
          )}
        </button>
      </div>
    </div>
  );
};
