// app/api/auth/signin.ts
import { signInWithGoogle } from "@/lib/authActions.server";

export default async function handler(req, res) {
  console.log('signing...')
  if (req.method === 'POST') {
    try {
      const result = await signInWithGoogle();
      res.status(200).json({ message: 'Authentication successful', data: result });
    } catch (error) {
      res.status(500).json({ message: 'Authentication failed', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
