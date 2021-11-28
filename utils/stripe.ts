import Stripe from 'stripe';
import * as y from 'yup';
import { getEnv } from './env';
import { loadStripe } from '@stripe/stripe-js';

export const redirectToCheckout = async (session: Pick<Stripe.Checkout.Session, 'id'>) => {
  const stripe = await loadStripe(getEnv('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY'));

  return stripe!.redirectToCheckout({
    sessionId: session.id,
  });
};

export const stripeSessionSchema: y.SchemaOf<Pick<Stripe.Checkout.Session, 'id'>> = y
  .object()
  .shape({
    id: y.string().required(),
  });
