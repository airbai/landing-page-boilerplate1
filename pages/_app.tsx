import '../styles/globals.css'; // 确保引入全局样式，如果有的话
import type { AppProps } from 'next/app';
import Script from 'next/script';

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";
import { SubscriptionProvider } from "use-stripe-subscription";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
  <SubscriptionProvider
      stripePublishableKey={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
    >
      <ClerkProvider>
        <SignedIn>
          <Component {...pageProps} />
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
        <UserButton />
      </ClerkProvider>
    </SubscriptionProvider>
    </>
  );
}

export default MyApp;