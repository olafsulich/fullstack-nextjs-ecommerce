import { useMutation } from "react-query";
import type Prisma from "@prisma/client";
import type Stripe from "stripe";
import { buyProduct } from "../api/buyProduct";
import initStripe from "../../../config/initStripe";
import { redirectToCheckout } from "../../../utils/stripe";

export const useBuyProduct = () => {
  return useMutation((product: Prisma.Product) => buyProduct(product), {
    onSuccess: redirectToCheckout,
  });
};
