// components/StripeButton.js

import React, { useEffect, useState } from 'react';

import { Button } from "@nextui-org/react";
import { loadStripe, type Stripe } from "@stripe/stripe-js";

type StripeButtonProps = {
  buttonColor?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  buttonText: string;
  buttonVariant?:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost";
  priceId: string;
};

const stripePromise = process.env.NEXT_PUBLIC_STRIPE_KEY
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)
  : Promise.resolve(null);

const StripeButton = ({
  buttonText,
  buttonColor = "primary",
  buttonVariant = "solid",
  priceId,
}: StripeButtonProps) => {
  const [stripe, setStripe] = useState<Stripe | null>(null);

  useEffect(() => {
    async function initStripe() {
      const stripe = await stripePromise;
      setStripe(stripe);
    }
    initStripe();
  }, []);

const handleCheckout = async () => {
    if (!stripe) return;
    
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: priceId, quantity: 1 }],
      mode: 'subscription',
      successUrl: 'https://fiit.ai/success',
      cancelUrl: 'https://fiit.ai/cancel',
    });

    if (error) {
      console.error("Stripe Checkout error:", error.message);
    }
  };

  return (
    <Button
      fullWidth
      color={buttonColor}
      variant={buttonVariant}
      onClick={handleCheckout}
    >
      {buttonText}
    </Button>
  );
};

export default StripeButton;
