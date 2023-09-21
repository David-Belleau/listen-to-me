import { ToggleBg, ToggleButton } from "../../utils/darkMode";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { toggleBgFooter } = ToggleBg();
  const { toggleButton } = ToggleButton();

  return (
    <footer className={`mt-8 ${toggleBgFooter}`}>
      <div className="flex flex-col justiy-center items-center gap-8 py-5 ">
        <a href="mailto:david-belleau@hotmail.com">
          <button
            className={`rounded-md w-full py-2 px-4 text-sm font-semibold transition-all duration-400 ease-in-out border-transparent ${toggleButton}`}
          >
            Contact
          </button>
        </a>
        <p className="text-sm">&copy; {currentYear} Listen to me</p>
      </div>
    </footer>
  );
};
