declare module "use-stripe-subscription" {
  import type { ReactNode } from "react";
  import type Stripe from "stripe";

  export function SubscriptionProvider(args: {
    children: ReactNode;
    endpoint?: string;
    stripePublishableKey: string;
  }): ReactNode;

  export function subscriptionHandler(args: {
    body: unknown;
    customerId: string;
    query: unknown;
  }): Promise<unknown>;

  export const stripeApiClient: Stripe;
}
