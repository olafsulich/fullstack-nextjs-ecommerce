import type Prisma from "@prisma/client";
import Image from "next/image";
import { useCart } from "./hooks/useCart";

type CartItemProps = Prisma.Product;

export const CartItem = (product: CartItemProps) => {
  const { id, name, price, image } = product;
  const { dispatch } = useCart();

  const handleDelete = (product: Prisma.Product) => {
    dispatch({ type: "deleteProduct", payload: product });
  };

  return (
    <li className="py-6 flex">
      <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
        <img
          src={image}
          alt=""
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="ml-4 flex-1 flex flex-col">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>{name}</h3>
          <p className="ml-4">{price / 100}</p>
        </div>
        <div className="flex-1 flex items-end justify-between text-sm">
          <div className="flex">
            <button
              type="button"
              onClick={() => handleDelete(product)}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Usuń
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
