import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  UserCircleIcon,
  UserIcon,
  UserMinusIcon,
} from "@heroicons/react/24/outline";

const Authentification = () => {
  const currentUser = "user";
  return (
    <>
      {
        currentUser ? (
          <Popover className="relative">
            <Popover.Button className="grid focus:outline-none">
              <UserIcon
                className="w-6 justify-self-center"
                aria-hidden="true"
              />
              <span>Mon compte</span>
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <div className="relative grid gap-6 bg-gray px-5 py-6 sm:gap-8 sm:p-8">
                    <a
                      href="/myaccount"
                      className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                    >
                      <UserCircleIcon
                        className="h-6 w-6 flex-shrink-0 mr-2"
                        aria-hidden="true"
                      />
                      <p className="text-base font-medium">Mes informations</p>
                    </a>
                    <a
                      href="/"
                      className="-m-3 flex items-start rounded-lg p-3"
                    >
                      <UserMinusIcon
                        className="h-6 w-6 flex-shrink-0 mr-2"
                        aria-hidden="true"
                      />
                      <p className="text-base font-medium">Se déconnecter</p>
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        ) : (
          ""
        ) // <Link to='/register'/>
      }
    </>
  );
};

export default Authentification;
