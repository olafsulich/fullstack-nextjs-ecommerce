import type Prisma from "@prisma/client";
import { fetcher } from "../../../utils/fetcher";
import { stripeSessionSchema } from "../../../utils/stripe";
import { transformProduct } from "../utils/transforms";

export const buyProduct = async (product: Prisma.Product) => {
  const stripeItem = transformProduct(product);
  console.log(stripeItem);

  return await fetcher(`/api/checkout/products/`, {
    method: "POST",
    body: [stripeItem],
    schema: stripeSessionSchema,
  });
};
