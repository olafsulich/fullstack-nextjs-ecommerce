import * as y from 'yup';
import type Prisma from '@prisma/client';

export const productSchema: y.SchemaOf<Prisma.Product> = y.object().shape({
  id: y.string().required(),
  description: y.string().required(),
  name: y.string().required(),
  price: y.number().required(),
  image: y.string().required(),
});

export const productsSchema = y.array(productSchema);
