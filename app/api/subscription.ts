import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(501).json({ message: "Subscription API not configured" });
};

export default handler;
