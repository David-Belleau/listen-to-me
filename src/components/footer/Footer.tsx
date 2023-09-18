import { ToggleBg, ToggleLogo } from "../../utils/darkMode";
import { SiTwitter, SiFacebook, SiYoutube, SiInstagram } from "react-icons/si";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { toggleBgFooter, toggleBgSeparator } = ToggleBg();

  return (
    <footer className={toggleBgFooter}>
      <div className="flex flex-col sm:flex-row justify-evenly text-center sm:text-start p-4 sm:p-8 gap-6 2xl:gap-40">
          <ToggleLogo/>
        <div>
          <h3 className="text-base font-medium mb-4">Liens utiles</h3>
          <a href="/about-us">
            <p className="italic text-sm hover:text-orange">
              Qui sommes nous ?
            </p>
          </a>
          <a href="/personal-data">
            <p className="italic text-sm hover:text-orange">
              Données personnelles
            </p>
          </a>
        </div>
        <div>
          <h3 className="text-base font-medium mb-4">Suivez-nous sur</h3>
          <div className="flex flex-row justify-center items-center sm:justify-start gap-3">
            <a href="https://www.facebook.com">
              <SiFacebook
                className="w-6 text-orange"
                title="logo de Facebook"
              />
            </a>
            <a href="https://www.youtube.com">
              <SiYoutube className="w-6 text-orange" title="logo de Youtube" />
            </a>
            <a href="https://www.twitter.com">
              <SiTwitter className="w-6 text-orange" title="logo de Twitter" />
            </a>
            <a href="https://www.instagram.com">
              <SiInstagram
                className="w-6 text-orange"
                title="logo de Instagram"
              />
            </a>
          </div>
        </div>
      </div>
      <div className={`${toggleBgSeparator} h-px w-3/4 mx-auto`}></div>
      <p className="py-4 text-center text-sm">
        &copy; {currentYear} Listen to me
      </p>
    </footer>
  );
};
