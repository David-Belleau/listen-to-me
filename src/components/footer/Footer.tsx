import React from "react";

const imgsSlider = [
  {
    link: "https://www.facebook.com",
    src: "./images/logo-facebook.svg",
    alt: "logo de Facebook",
    className: "w-6",
  },
  {
    link: "https://www.youtube.com",
    src: "./images/logo-youtube.svg",
    alt: "logo de Youtube",
    className: "w-6",
  },
  {
    link: "https://twitter.com",
    src: "./images/logo-twitter.svg",
    alt: "logo de Twitter",
    className: "w-6",
  },
  {
    link: "https://www.instagram.com",
    src: "./images/logo-instagram.svg",
    alt: "logo de Instagram",
    className: "w-6",
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-gray">
      <div className="flex flex-col sm:flex-row sm:justify-around 2xl:justify-center text-center sm:text-start p-4 sm:p-8 gap-6 2xl:gap-40">
        <a href="/" className="m-auto sm:m-0">
          <img
            src="./images/logo_site.svg"
            alt="logo du site"
            className="w-30"
          />
        </a>
        <div>
          <h3 className="text-base font-medium mb-4">Liens utiles</h3>
          <a href="/about-us">
            <p className="italic text-sm">Qui sommes nous ?</p>
          </a>
          <a href="/personal-data">
            <p className="italic text-sm">Données personnelles</p>
          </a>
        </div>
        <div>
          <h3 className="text-base font-medium mb-4">Suivez-nous sur</h3>
          <div className="flex flex-row justify-center items-center sm:justify-start gap-3">
            {imgsSlider.map((img, index) => (
              <a key={index} href={img.link}>
                <img src={img.src} alt={img.alt} className={img.className} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="h-px bg-black w-4/5 mx-auto"></div>
      <p className="py-4 text-center text-sm">&copy; {currentYear} Listen to me</p>
    </footer>
  );
};

