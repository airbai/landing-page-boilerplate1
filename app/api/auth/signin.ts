// app/api/auth/signin.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { signInWithGoogle } from "@/lib/authActions.server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("signing...");

  if (req.method === "POST") {
    try {
      const result = await signInWithGoogle();
      res
        .status(200)
        .json({ message: "Authentication successful", data: result });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unknown authentication error";

      res.status(500).json({ message: "Authentication failed", error: message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end("Method Not Allowed");
  }
}
