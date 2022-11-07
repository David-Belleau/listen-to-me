import SearchBar from "./SearchBar";
import Cart from "./Cart";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  /* HeartIcon,
  LanguageIcon,
  MapPinIcon, */
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Authentification from "./Authentification/Authentification";
import { UserMinusIcon } from "@heroicons/react/24/outline";

const links = [
  {
    name: "Panier",
    href: "/cart",
    icon: ShoppingCartIcon,
  },
  /* {
    name: "Mes favoris",
    href: "/bookmark",
    icon: HeartIcon,
  },
  {
    name: "Langue",
    // href: "#",
    icon: LanguageIcon,
  },
  {
    name: "Localisation",
    href: "/location",
    icon: MapPinIcon,
  }, */
  {
    name: "Se déconnecter",
    href: "/",
    icon: UserMinusIcon,
  },
];

const currentUser = "user";

const NavBarMain = () => {
  return (
    <Popover className="relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between md:justify-center py-4 md:space-x-10">
          <div className="flex justify-start ">
            <a href="/">
              <img
                className="w-24"
                src="./images/logo_site.svg"
                alt="logo du site"
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6 text-orange" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group
            as="nav"
            className="hidden gap-x-14 sm:gap-x-6 md:gap-x-8 md:flex items-center text-sm"
          >
            {/* <a href="/" className="grid">
              <MapPinIcon className="w-6 justify-self-center" />
              <p>Localisation</p>
            </a> */}
            <SearchBar />
            {/* <a href="/bookmark" className="grid">
              <HeartIcon className="w-6 justify-self-center" />
              <p>Favoris</p>
            </a> */}
            <Cart />
            <Authentification />
            {/* <a href="/" className="grid">
              <LanguageIcon className="w-6 justify-self-center" />
              <p>Language</p>
            </a> */}
          </Popover.Group>
        </div>
      </div>

      {/* Screen mobile */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-white rounded-lg bg-gray shadow-lg ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="w-24"
                    src="./images/logo_site.svg"
                    alt="logo du site"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-gray p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon
                      className="h-6 w-6 text-orange"
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {currentUser && (
                    <a
                      href="/myaccount"
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <UserIcon
                        className="h-6 w-6 flex-shrink-0 text-black"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Mon compte
                      </span>
                    </a>
                  )}
                  {links.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon
                        className="h-6 w-6 flex-shrink-0 text-black"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <SearchBar />
            <div className="space-y-6 py-6 px-5">
              <div>
                <a
                  href="/register"
                  className="flex w-full sm:w-6/12 m-auto items-center justify-center rounded-md border border-transparent bg-orange px-4 py-2 text-base font-medium text-gray shadow-sm"
                >
                  S'inscrire
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Déjà inscrit ?{" "}
                  <a href="/login" className="text-orange">
                    Se connecter
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
      {/* Screen mobile */}
    </Popover>
  );
};

export default NavBarMain;
