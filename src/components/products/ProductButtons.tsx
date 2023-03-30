import { EyeIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { ProductProps } from "../../utils/types/components";

const CallToActionButton = ({url}: ProductProps) => {
  return (
    <div className="flex justify-center gap-x-3 md:gap-x-6 mt-1 md:mt-2 sm:mb-4">
      <a href="/cart">
        <ShoppingCartIcon className="w-6 sm:w-9 sm:hidden" />
        <p className="hidden sm:block text-center text-xs rounded border-2 p-1 border-black bg-gray">
          Ajouter au panier
        </p>
      </a>
      <a href={url} className="">
        <EyeIcon className="w-6 sm:w-9 sm:hidden" />
        <p className="hidden sm:block text-center text-xs rounded border-2 p-1 border-black bg-gray">
          Voir le détail
        </p>
      </a>
    </div>
  );
};

const SeeAllProductsButton = ({url, children}: ProductProps) => {
  return (
    <div className="text-center mb-4">
      <a
        href={url}
        className="rounded border-2 border-black py-1 sm:py-2 px-2 sm:px-4 text-xs md:text-base"
      >
        {children}
      </a>
    </div>
  );
};

export { CallToActionButton, SeeAllProductsButton };
