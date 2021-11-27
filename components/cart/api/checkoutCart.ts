import type Prisma from "@prisma/client";
import { fetcher } from "../../../utils/fetcher";
import { stripeSessionSchema } from "../../../utils/stripe";
import { transformProduct } from "../../products/utils/transforms";

export const checkoutCart = async (products: Array<Prisma.Product>) => {
  const stripeItems = products.map((product) => transformProduct(product));

  return await fetcher(`/api/checkout/products/`, {
    method: "POST",
    body: stripeItems,
    schema: stripeSessionSchema,
  });
};
