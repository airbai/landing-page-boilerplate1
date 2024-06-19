// components/StripeButton.js

import React, { useEffect, useState } from 'react';

import { loadStripe } from '@stripe/stripe-js';
import { Button } from "@/components/ui/button";


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

const StripeButton = ({ buttonText, buttonColor, buttonVariant, priceId }) => {
  const [stripe, setStripe] = useState(null);

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
