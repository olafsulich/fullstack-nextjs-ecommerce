import { useMutation } from 'react-query';
import type Prisma from '@prisma/client';
import { checkoutCart } from '../api/checkoutCart';
import { redirectToCheckout } from '../../../utils/stripe';

export const useCheckout = () => {
  return useMutation((products: Array<Prisma.Product>) => checkoutCart(products), {
    onSuccess: redirectToCheckout,
  });
};
