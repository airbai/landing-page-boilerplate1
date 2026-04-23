import '../styles/globals.css'; // 确保引入全局样式，如果有的话
import type { AppProps } from 'next/app';
import Script from 'next/script';

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  UserButton,
} from "@clerk/nextjs";
import { SubscriptionProvider } from "use-stripe-subscription";

function MyApp({ Component, pageProps }: AppProps) {
  const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  const page = <Component {...pageProps} />;

  const content = clerkPublishableKey ? (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <SignedIn>{page}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <UserButton />
    </ClerkProvider>
  ) : (
    page
  );

  return (
    <>
      <SubscriptionProvider
        stripePublishableKey={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""}
      >
        {content}
      </SubscriptionProvider>
    </>
  );
}

export default MyApp;
