import React from "react";

export const Form = () => {
  return (
    <div>
      <div>
        <form action="#" method="POST">
          <div>
            <div className="px-4 py-2">
              <div className="grid grid-cols-6 gap-3">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Prénom
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="bg-gray mt-1 block w-full rounded-md border-black shadow-sm focus:border-orange focus:ring-orange sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="bg-gray mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange focus:ring-orange sm:text-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Adresse e-mail
                  </label>
                  <input
                    type="text"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    className="bg-gray mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange focus:ring-orange sm:text-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <input
                    type="text"
                    name="message"
                    id="message"
                    autoComplete="message"
                    className="bg-gray mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange focus:ring-orange sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-4 pt-1 text-center">
              <button
                type="submit"
                className="rounded-md w-full border border-transparent bg-orange py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange focus:outline-none"
              >
                Envoyer
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
