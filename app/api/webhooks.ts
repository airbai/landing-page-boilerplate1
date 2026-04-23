import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY ?? "";
const stripeWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET ?? "";

const stripe = new Stripe(stripeSecretKey, { apiVersion: "2020-08-27" });

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const sig = req.headers["stripe-signature"];
  let event: Stripe.Event;

  if (typeof sig !== "string") {
    res.status(400).send("Missing Stripe signature");
    return;
  }

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, stripeWebhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown webhook error";

    res.status(400).send(`Webhook Error: ${message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case "payment_intent.succeeded":
      // Handle the confirmation of payment
      break;
    case "payment_intent.payment_failed":
      // Handle the failed payment attempt
      break;
    default:
      return res.status(400).end();
  }

  res.json({ received: true });
};

export default handler;
