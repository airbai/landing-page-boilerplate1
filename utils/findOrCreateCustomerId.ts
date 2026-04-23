import { clerkClient } from "@clerk/nextjs/server";
import { stripeApiClient } from "use-stripe-subscription";

export const findOrCreateCustomerId = async ({
  clerkUserId,
}: {
  clerkUserId: string;
}) => {
  let user = await clerkClient.users.getUser(clerkUserId);
  if (user.publicMetadata.stripeCustomerId) {
    return user.publicMetadata.stripeCustomerId as string;
  }

  const primaryEmail =
    user.emailAddresses.find((x) => x.id === user.primaryEmailAddressId)
      ?.emailAddress ?? user.emailAddresses[0]?.emailAddress;

  if (!primaryEmail) {
    throw new Error("Clerk user is missing an email address");
  }

  const customerCreate = await stripeApiClient.customers.create(
    {
      name: user.firstName + " " + user.lastName,
      email: primaryEmail,
      metadata: {
        clerkUserId: user.id,
      },
    },
    {
      idempotencyKey: user.id,
    }
  );
  user = await clerkClient.users.updateUser(user.id, {
    publicMetadata: {
      stripeCustomerId: customerCreate.id,
    },
  });
  return user.publicMetadata.stripeCustomerId as string;
};
