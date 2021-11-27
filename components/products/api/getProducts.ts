import { fetcher } from "../../../utils/fetcher";
import { productsSchema } from "../utils/schemas";

export const getProducts = async () => {
  return await fetcher("/api/products", {
    method: "GET",
    schema: productsSchema,
  });
};
