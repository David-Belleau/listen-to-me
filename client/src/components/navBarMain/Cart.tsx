import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export const Cart = () => {
  return (
    <a href="/cart" className="grid">
      <ShoppingCartIcon className="w-6 justify-self-center"/>
      <p>Panier</p>
    </a>
  );
};

