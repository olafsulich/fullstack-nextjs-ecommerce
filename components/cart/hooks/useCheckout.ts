import { useMutation } from "react-query";
import { checkoutCart } from "../api/checkoutCart";
import { redirectToCheckout } from "../../../utils/stripe";
import type Prisma from "@prisma/client";

export const useCheckout = () => {
  return useMutation(
    (products: Array<Prisma.Product>) => checkoutCart(products),
    {
      onSuccess: redirectToCheckout,
    }
  );
};
