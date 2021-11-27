import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;

const initStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
};

export default initStripe;
