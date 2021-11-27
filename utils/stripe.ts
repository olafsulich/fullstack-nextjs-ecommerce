import { NextApiRequest } from "next";
import Stripe from "stripe";
import * as y from "yup";
import initStripe from "../config/initStripe";
import { getEnv } from "./env";

export const redirectToCheckout = async (
  session: Pick<Stripe.Checkout.Session, "id">
) => {
  const stripe = await initStripe();

  return stripe!.redirectToCheckout({
    sessionId: session.id,
  });
};

export const stripeSessionSchema: y.SchemaOf<
  Pick<Stripe.Checkout.Session, "id">
> = y.object().shape({
  id: y.string().required(),
});
