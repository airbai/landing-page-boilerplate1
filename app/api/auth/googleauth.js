export default async function handler(req, res) {
  res.status(501).json({ message: "Auth disabled" });
}
